import {test} from "@playwright/test";

test.only('Login Page',async ({page})=>{
await page.goto('https://eventhub.rahulshettyacademy.com/login')
await page.getByPlaceholder('you@email.com').fill('sharib.islam@outlook.com')
await page.getByLabel('Password').fill('Next@1234')
await page.locator('#login-btn').click()
await page.getByTestId('nav-events').click()
await page.getByText('Add New Event').click()
const eventTitle= `Test Event ${Date.now()}`
await page.getByTestId('event-title-input').fill(eventTitle)
await page.locator('#admin-event-form textarea').fill('This is a test event created by automation script')
await page.getByLabel('City').fill('Cardiff')
//await page.pause()
await page.getByLabel('Venue').fill('Century Wharf')
//await page.getByLabel('Event Date & Time').fill(futureDateValue('yyyy-MM-dd HH:mm'));
})
