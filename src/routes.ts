import { createCheerioRouter, CheerioContext } from "crawlee";

export const router = createCheerioRouter();

const categories = [
  "groepenkasten",
  "groepenkast-componenten",
  "schakelmateriaal",
  "installatiemateriaal",
  "draad-en-kabel",
  "laadpaal",
  "elektrabuizen",
  "bevestiging",
  "verlichting",
  "netwerk-internet",
  "gereedschap",
  "zonnepaneel-materiaal",
  "ucht-en-ventilatie",
  "water-aanvoer-afvoer",
  "verwarming-en-koeling",
];

router.addDefaultHandler(async ({ enqueueLinks, log }) => {
  log.info(`enqueueing new URLs`);

  for (const category of categories) {
    await enqueueLinks({
      globs: [`https://www.elektramat.nl/${category}/**`],
      label: "category",
    });
  }
});

async function enqueuePdpLinks(ctx: CheerioContext, selector: string) {
  const links = ctx.$(selector).find("a");
  const pdpLinks = links.map((_, element) => ctx.$(element).attr("href")).get();

  for (const link of pdpLinks) {
    if (link) {
      await ctx.enqueueLinks({
        urls: [link],
        label: "PDP",
      });
    }
  }
}

router.addHandler("category", async (ctx) => {
  await enqueuePdpLinks(ctx, ".item.product.product-item");
});

router.addHandler("PDP", async ({ request, $, log, pushData }) => {
  log.info(`Processing ${request.loadedUrl}`);
  const title = $("title").text();
  const html = $.html();

  console.log(title);

  //   await pushData({
  //     url: request.loadedUrl,
  //     title,
  //     html,
  //     is_scrapped: true,
  //   });
});
