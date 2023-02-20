import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { History, Transition } from 'history'
import { useContext, useEffect } from 'react'
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom'

type ExtendNavigator = Navigator & Pick<History, 'block'>
// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const editorCompare = {
	data: '',
	run: (data: string, fn?: Function) => {
		if(fn) {
			if(editorCompare.data === JSON.stringify(data)) {
				return fn
			} else {
				alert('将不保存修改')
			}
		}else {
			editorCompare.data = JSON.stringify(data)
		}
	},
}

export function useBlocker(blocker: (tx: Transition) => void, when = true) {
	const { navigator } = useContext(NavigationContext)

	useEffect(() => {
		if (!when) return
		// 如不需要刷新页面或关闭tab时取消浏览器询问弹窗，下面的绑定事件则不需要
		window.addEventListener('beforeunload', removeBeforeUnload)
		const unblock = (navigator as any as ExtendNavigator).block(tx => {
			const autoUnblockingTx = {
				...tx,
				retry() {
					unblock()
					tx.retry()
				},
			}
			blocker(autoUnblockingTx)
		})
		// 由于无法直接 remove history 库中绑定的 beforeunload 事件，只能自己在绑定一个 beforeunload 事件（在原事件之前），触发时调用 unblock
		//
		function removeBeforeUnload() {
			unblock()
		}
		return () => {
			unblock()
			window.removeEventListener('beforeunload', removeBeforeUnload)
		}
	}, [when])
}
