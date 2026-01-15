// Creating Promises

type User = {
	id: string
	name: string
	email: string
}

// 🐨 Create a function `fetchUser` that returns a Promise<User>
//    The Promise should resolve after 1 second with a user object
//    Use setTimeout to simulate the delay
// 💰 new Promise((resolve) => { setTimeout(() => resolve(...), 1000) })

// 🐨 Call fetchUser and log the result when it resolves
// 💰 fetchUser().then((user) => console.log(user))

// 🐨 When you're done, uncomment this:
// fetchUser().then((user) => {
// 	console.log('Results JSON:', JSON.stringify(user))
// })
