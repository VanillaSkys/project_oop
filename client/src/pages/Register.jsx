function RegistPage () 
{
	return(
<div className="p-4 h-screen flex items-center justify-center bg-[url(image/bg.jpg)]">
	<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
		<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<h1 className='text-5xl font-semibold text-center text-gray-300'>
				Register
				<span className='text-blue-500'> Account</span>
			</h1>
			<form>
				<div className="mt-5">
					<label className='label'>
						<span className='text-2xl text-white label-text'>Username</span>
					</label>
					<input type='text' placeholder='Enter username' className='rounded-md w-full mt-4 pl-5 input input-bordered h-12'
					/>
				</div>
				<div className="mt-5">
					<label className='label'>
						<span className='text-2xl text-white label-text'>Password</span>
					</label>
					<input type='password' placeholder='Enter Password' className='w-full rounded-md mt-4 pl-5 input input-bordered h-10'/>
				</div>
				<div className="mt-5">
					<label className='label'>
						<span className='text-2xl text-white label-text'>Confirm Password</span>
					</label>
					<input type='password' placeholder='Enter Confirm Password' className='w-full rounded-md pl-5 mt-4 input input-bordered h-10'/>
				</div>
				<div className="mt-5">
					<label className='label'>
						<span className='text-2xl text-white label-text'>E-mail</span>
					</label>
					<input type='email' pattern="[0-9]{10}" placeholder='Enter E-mail' className='w-full rounded-md pl-5 mt-4 input input-bordered h-10'/>
				</div>
				<div>
					<button className='btn btn-block btn-sm mt-5 w-full p-2 bg-slate-700'>
						<span className='loading loading-spinner text-3xl text-white'>Register</span>
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
	);
}

export default RegistPage

{/* <div className="grid grid-rows-7">
				<div>Login</div>
				<div>Websiter</div>
				<div>03</div>
				<div>04</div>
				<div>05</div>
				<div>06</div>
				<div>07</div>
			</div> */}