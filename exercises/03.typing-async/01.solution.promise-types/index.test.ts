import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { user, products } = JSON.parse(jsonLine.replace('Results:', '').trim())

await test('fetchUser returns a Promise that resolves to a User', async () => {
	assert.ok(
		'id' in user,
		'🚨 user should have an id property - make sure your async function returns Promise<User>',
	)
	assert.ok(
		'name' in user,
		'🚨 user should have a name property - make sure your async function returns Promise<User>',
	)
	assert.ok(
		'email' in user,
		'🚨 user should have an email property - make sure your async function returns Promise<User>',
	)
	assert.strictEqual(
		user.id,
		'1',
		'🚨 user.id should be "1" - check your Promise return type',
	)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - check your Promise return type',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - check your Promise return type',
	)
})

await test('fetchProducts returns a Promise that resolves to an array of Products', async () => {
	assert.strictEqual(
		Array.isArray(products),
		true,
		'🚨 products should be an array - make sure your async function returns Promise<Product[]>',
	)
	assert.ok(
		products.length > 0,
		'🚨 products should have at least one item - check your Promise return type',
	)
	assert.ok(
		'id' in products[0],
		'🚨 products[0] should have an id property - check your Promise return type',
	)
	assert.ok(
		'name' in products[0],
		'🚨 products[0] should have a name property - check your Promise return type',
	)
	assert.ok(
		'price' in products[0],
		'🚨 products[0] should have a price property - check your Promise return type',
	)
})

await test('loadData function loads both user and products', async () => {
	assert.strictEqual(
		user.id,
		'1',
		'🚨 result.user.id should be "1" - make sure loadData returns an object with user and products',
	)
	assert.ok(
		products.length > 0,
		'🚨 result.products should have items - make sure loadData returns an object with user and products',
	)
})
