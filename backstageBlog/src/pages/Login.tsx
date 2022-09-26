import { useState } from 'react'

const Login = () => {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			{count}
		</div>
	)
}

export default Login
