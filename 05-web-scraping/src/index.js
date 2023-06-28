import jsdom from "jsdom";
import fetch from "isomorphic-fetch"
import puppeteer from "puppeteer"

(async () => {
    // Lancement browser
      const browser = await puppeteer.launch();
    //Ouvrir une nouvelle page
      const page = await browser.newPage();
    //Aller au lien example.com
    await page.goto('https://fr.wikipedia.org/wiki/Canton_(Suisse)#Donn%C3%A9es_cantonales');

    //Récupérer le contenu de la page
    const content = await page.content();

    const screenshot = await page.screenshot();

    await browser.close();
});
