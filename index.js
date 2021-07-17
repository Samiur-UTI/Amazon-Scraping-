const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const CronJob = require('cron').CronJob;
const nodeMailer = require('nodemailer');

const url = 'https://www.amazon.com/PlayStation-DualSense-Wireless-Controller-Midnight-5/dp/B094WL86N5/ref=sr_1_1?dchild=1&keywords=ps5&qid=1626543209&sr=8-1'
//Instansiate the url
async function browserConfig(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto(url);
    return page
}
// Price check function
async function priceCheck(page){
    await page.reload;
    let markup = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(markup)
}
//Monitoring function
async function monitor(){
    let page = await browserConfig();
    await priceCheck(page)
}
monitor();