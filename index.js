const puppeteer = require('puppeteer');
const readLineSync = require('readline-sync');

console.log("Bem-Vindo, vamos checar a variação do real de hoje 🤖💰");
(async()=>{
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const baseMoeda = readLineSync.question('Digite a moeda base: ') || 'dolar';
    const finalMoeda = readLineSync.question('Digite a moeda desejada: ') || 'real';
    const googleSearch = `https://www.google.com/search?q=${baseMoeda}+para+${finalMoeda}&oq=${baseMoeda}+para+${finalMoeda}&aqs=edge.0.0i131i433i512j0i512j0i131i433i512j0i512l5.1831j0j1&sourceid=chrome&ie=UTF-8`;
    await page.goto(googleSearch);
    
    const resultado = await page.evaluate(() => document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value);
    
    console.log(`Registrado em: ${new Date().toLocaleString()}`)
    console.log(`O valor de 1 ${baseMoeda} em ${finalMoeda} é: ${resultado}`)
    
    await browser.close();
})();