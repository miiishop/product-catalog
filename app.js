const IMG = "asset/";

const DEFAULT_WALLET_SIZE = "Approx. 3.5 x 4.5 inches (Height x Width)";
const DEFAULT_ZIPPER_COLORS = ["White", "Rice white", "Cream", "Beige", "Brown", "Pink", "Red"];
const DEFAULT_LINING_COLORS = ["Brown", "Champagne", "Rust Orange", "Pink", "Sky blue", "Maroon", "Brown", "Dark Peach", "Red", "Light pink", "Pale Orange", "Avocado", "Maize Yellow", "Old Rose", "taro", "Blue Cotton Candy", "Baby Blue", "Aqua Blue", "Flamingo", "Canary Yellow", "Dark Sage Green", "Peach", "Red", "Orange", "Lilac", "Sage Green", "Rose Gold"];
const PRODUCT_PRICES = {
  wallet: "₱150",
  "everyday-pouch": "₱285",
  "cable-holder": "₱50"
};

const PRODUCT_PHOTO_SETS = [
  {
    name: "AMBER",
    files: ["AMBER.png", "AMBER2.png", "AMBER3.png"],
    note: "Yellow and orange strawberry",
    zipperColors: ["Rice white"],
    liningColors: ["Rust Orange"]
  },
  {
    name: "BEA",
    files: ["BEA.png", "BEA2.png", "BEA3.png"],
    note: "Bunny garden on cream",
    zipperColors: ["Rice white", "Red"],
    liningColors: ["Rust Orange", "Maroon"],
  },
  {
    name: "BERRY",
    files: ["BERRY.png", "BERRY2.png", "BERRY3.png"],
    note: "Pink classic strawberry",
    zipperColors: ["Red", "Pink"],
    liningColors: ["Maroon", "Pink"]
  },
  {
    name: "CHERRIE",
    files: ["CHERRIE.png", "CHERRIE2.png", "CHERRIE3.png"],
    note: "Big cherry on cream",
    zipperColors: ["Red", "Beige"],
    liningColors: ["Red"]
  },
  {
    name: "CLEO",
    files: ["CLEO.png", "CLEO2.png", "CLEO3.png"],
    note: "Beige mini grid",
    zipperColors: ["Brown", "Rice White"],
    liningColors: ["Brown"]
  },
  {
    name: "CLOVER",
    files: ["CLOVER.png", "CLOVER2.png", "CLOVER3.png"],
    note: "Sage ditsy floral",
    zipperColors: ["White"],
    liningColors: ["Dark Peach"]
  },
  {
    name: "HAZEL",
    files: ["HAZEL.png", "HAZEL2.png", "HAZEL3.png"],
    note: "Green autumn leaves",
    zipperColors: ["Rice White", "Beige"],
    liningColors: ["Champagne", "Brown"],
    
  },
  {
    name: "LILY",
    files: ["LILY.png", "LILY2.png", "LILY3.png"],
    category: "everyday-pouch",
    note: "Espresso pink polka dot",
    liningColors: ["Brown"],
    
  },
  {
    name: "LUNA",
    files: ["LUNA.png", "LUNA2.png", "LUNA33.png"],
    note: "Butter yellow strawberry",
    zipperColors: ["Red"],
    liningColors: ["Maroon"]
  },
  {
    name: "MARIGOLD",
    files: ["MARIGOLD.png", "MARIGOLD2.png", "MARIGOLD3.png"],
    note: "Yellow and pink daisy",
    zipperColors: ["Rice White"],
    liningColors: ["Rust Orange"]
  },
  {
    name: "DAISY",
    files: ["CH.DAISY2.png", "CH.DAISY.png"],
    category: "cable-holder",
    note: "Lilac floral patchwork",
    snapButtonColors: ["Purple"],
    liningColors: ["Light pink"],
    // image: "asset/DAISY.png",
    // images: ["asset/DAISY.png"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "CELESTE",
    files: ["CH.CELESTE.png", "CH.CELESTE2.png"],
    category: "cable-holder",
    note: "Blue ribbon",
    snapButtonColors: ["White"],
    liningColors: ["Sky blue"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "CLARA",
    files: ["CH.CLARA.png", "CH.CLARA2.png"],
    category: "cable-holder",
    note: "Pastel floral patchwork",
    snapButtonColors: ["White"],
    liningColors: ["Pink polka dot"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "LILY",
    id: "cable-holder-lily",
    files: ["CH.LILY.png", "CH.LILY2.png"],
    category: "cable-holder",
    note: "Espresso pink polka dot",
    snapButtonColors: ["Pale pink"],
    liningColors: ["Pale pink brown polka dot"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "LOTTIE",
    files: ["CH.LOTTIE.png", "CH.LOTTIE2.png"],
    category: "cable-holder",
    note: "Ditsy floral stripe",
    snapButtonColors: ["Ivory"],
    liningColors: ["Light pink"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "LOVELY",
    files: ["CH.LOVELY.png", "CH.LOVELY2.png"],
    category: "cable-holder",
    note: "Blue daisy and tulip patch",
    snapButtonColors: ["White"],
    liningColors: ["Sky blue"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "LUNA",
    id: "cable-holder-luna",
    files: ["CH.LUNA.png", "CH.LUNA2.png"],
    category: "cable-holder",
    note: "Butter yellow strawberry",
    snapButtonColors: ["Dark pink"],
    liningColors: ["Light pink"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "MARY",
    files: ["CH.MARY.png", "CH.MARY2.png"],
    category: "cable-holder",
    note: "Blush brown polka dot",
    snapButtonColors: ["Pale pink"],
    liningColors: ["Brown pink polka dot"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "MYRA",
    files: ["CH.MYRA.png", "CH.MYRA2.png"],
    category: "cable-holder",
    note: "White floral print",
    snapButtonColors: ["Light pink"],
    liningColors: ["Sky blue"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "ROSE",
    files: ["CH.ROSE.png", "CH.ROSE2.png"],
    category: "cable-holder",
    note: "Soft rose white polka dot",
    snapButtonColors: ["Peach"],
    liningColors: ["Pink gingham"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "SOPHIE",
    id: "cable-holder-sophie",
    files: ["CH.SOPHIE.png", "CH.SOPHIE2.png"],
    category: "cable-holder",
    note: "Periwinkle white polka dot",
    snapButtonColors: ["Pale pink"],
    liningColors: ["Sky blue"],
    details: ["Approx. 4.5 x 1.5 inches (Height x Width)", "Folded: 2.5 x 1.5 inches (Height x Width)"]
  },
  {
    name: "MIA",
    files: ["MIA.png", "MIA2.png", "MIA3.png"],
    note: "White mini cherry orange",
    zipperColors: ["Rice White", "White"],
    liningColors: ["Rust Orange", "Sky Blue"]
  },
  {
    name: "MILLIE",
    files: ["MILLIE.png", "MILLIE2.png", "MILLIE3.png"],
    note: "White mixed strawberry",
    zipperColors: ["Red", "Rice White"],
    liningColors: ["Maroon", "Rust Orange"]
  },
  {
    name: "POLLY",
    files: ["POLLY.png", "POLLY2.png", "POLLY3.png"],
    note: "White small cherry",
    zipperColors: ["Red", "White"],
    liningColors: ["Red", "Dark Peach"]
  },
  {
    name: "ROSIE",
    files: ["ROSIE.png", "ROSIE2.png", "ROSIE3.png"],
    note: "Pink strawberry blossom",
    zipperColors: ["Pink"],
    liningColors: ["Light Pink"]
  },
  {
    name: "SOPHIE",
    files: ["SOPHIE.png", "SOPHIE2.png", "SOPHIE3.png"],
    category: "everyday-pouch",
    note: "Periwinkle white polka dot",
    liningColors: ["Pink"]
  },
  {
    name: "STACEY",
    files: ["STACEY.png", "STACEY2.png", "STACEY3.png"],
    category: "everyday-pouch",
    note: "Lavender starry dot",
    liningColors: ["Pink"]
  },
  {
    name: "BROWN ver2",
    id: "everyday-pouch-brown-ver2",
    files: ["EP.1BROWN.jpg", "EP.1BROWN2.jpg", "EP.1BROWN3.jpg", "EP.1BROWN4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Corduroy",
    zipperColors: ["Cream"],
    liningColors: ["Yellow Gingham"]
  },
  {
    name: "AMBER",
    id: "everyday-pouch-amber",
    files: ["EP.AMBER.jpg", "EP.AMBER2.jpg", "EP.AMBER3.jpg", "EP.AMBER4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Yellow and orange strawberry",
    liningColors: ["Orange"]
  },
  {
    name: "BROWN",
    id: "everyday-pouch-brown",
    files: ["EP.BROWN2.jpg", "EP.BROWN.jpg", "EP.BROWN3.jpg", "EP.BROWN4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Corduroy",
    liningColors: ["Brown"]
  },
  {
    name: "CARMELA",
    id: "everyday-pouch-carmela",
    files: ["EP.CARMELA.jpg", "EP.CARMELA2.jpg", "EP.CARMELA3.jpg", "EP.CARMELA4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "White ditsy floral patchwork",
    zipperColors: ["Cream"],
    liningColors: ["Taro"]
  },
  {
    name: "CELESTE",
    id: "everyday-pouch-celeste",
    files: ["EP.CELESTE.jpg", "EP.CELESTE2.jpg", "EP.CELESTE3.jpg", "EP.CELESTE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Blue ribbon",
    zipperColors: ["White"],
    liningColors: ["Baby Blue"]
  },
  {
    name: "CHERRIE",
    id: "everyday-pouch-cherrie",
    files: ["EP.CHERRIE.jpg", "EP.CHERRIE2.jpg", "EP.CHERRIE3.jpg", "EP.CHERRIE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Big cherry on cream",
    zipperColors: ["Red"],
    liningColors: ["Red"]
  },
  {
    name: "CLOVER",
    id: "everyday-pouch-clover",
    files: ["EP.CLOVER.jpg", "EP.CLOVER2.jpg", "EP.CLOVER3.jpg", "EP.CLOVER4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Sage ditsy floral",
    zipperColors: ["Cream"],
    liningColors: ["Sage Green"]
  },
  {
    name: "JASMINE",
    id: "everyday-pouch-jasmine",
    files: ["EP.JASMINE.jpg", "EP.JASMINE2.jpg", "EP.JASMINE3.jpg", "EP.JASMINE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Pink berry blossom patch",
    zipperColors: ["Cream"],
    liningColors: ["Taro"]
  },
  {
    name: "LOTTIE",
    id: "everyday-pouch-lottie",
    files: ["EP.LOTTIE.jpg", "EP.LOTTIE2.jpg", "EP.LOTTIE3.jpg", "EP.LOTTIE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Ditsy floral stripe",
    zipperColors: ["Cream"],
    liningColors: ["Avocado"]
  },
  {
    name: "LUNA",
    id: "everyday-pouch-luna",
    files: ["EP.LUNA.jpg", "EP.LUNA2.jpg", "EP.LUNA3.jpg", "EP.LUNA4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Butter yellow strawberry",
    zipperColors: ["Cream"],
    liningColors: ["Avocado"]
  },
  {
    name: "MARIGOLD",
    id: "everyday-pouch-marigold",
    files: ["EP.MARIGOLD.jpg", "EP.MARIGOLD2.jpg", "EP.MARIGOLD3.jpg", "EP.MARIGOLD4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Yellow and pink daisy",
    zipperColors: ["Cream"],
    liningColors: ["Peach"]
  },
  {
    name: "MARY",
    id: "everyday-pouch-mary",
    files: ["EP.MARY.jpg", "EP.MARY2.jpg", "EP.MARY3.jpg", "EP.MARY4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Blush brown polka dot",
    zipperColors: ["Brown"],
    liningColors: ["Brown"]
  },
  {
    name: "MELO",
    id: "everyday-pouch-melo",
    files: ["EP.MELO.jpg", "EP.MELO2.jpg", "EP.MELO3.jpg", "EP.MELO4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Honey gingham",
    zipperColors: ["Cream"],
    liningColors: ["Canary Yellow"]
  },
  {
    name: "MIA",
    id: "everyday-pouch-mia",
    files: ["EP.MIA.jpg", "EP.MIA2.jpg", "EP.MIA3.jpg", "EP.MIA4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "White mini cherry orange",
    zipperColors: ["Brown"],
    liningColors: ["Canary Yellow"]
  },
  {
    name: "MINNIE",
    id: "everyday-pouch-minnie",
    files: ["EP.MINNIE.jpg", "EP.MINNIE2.jpg", "EP.MINNIE3.jpg", "EP.MINNIE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Beige cottage garden",
    zipperColors: ["Brown"],
    liningColors: ["Brown"]
  },
  {
    name: "POLLY",
    id: "everyday-pouch-polly",
    files: ["EP.POLLY.jpg", "EP.POLLY2.jpg", "EP.POLLY3.jpg", "EP.POLLY4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "White small cherry",
    zipperColors: ["Red"],
    liningColors: ["Red"]
  },
  {
    name: "ROSALIE",
    id: "everyday-pouch-rosalie",
    files: ["EP.ROSALIE.jpg", "EP.ROSALIE2.jpg", "EP.ROSALIE3.jpg", "EP.ROSALIE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Peach floral ribbon",
    zipperColors: ["Cream"],
    liningColors: ["Flamingo"]
  },
  {
    name: "ROSE",
    id: "everyday-pouch-rose",
    files: ["EP.ROSE.jpg", "EP.ROSE2.jpg", "EP.ROSE3.jpg", "EP.ROSE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Soft rose white polka dot",
    zipperColors: ["Cream"],
    liningColors: ["Flamingo"]
  },
  {
    name: "ROSIE",
    id: "everyday-pouch-rosie",
    files: ["EP.ROSIE.jpg", "EP.ROSIE2.jpg", "EP.ROSIE3.jpg", "EP.ROSIE4.jpg"],
    category: "everyday-pouch",
    isNew: true,
    note: "Pink strawberry blossom",
    zipperColors: ["Red"],
    liningColors: ["Red"]
  },
  {
    name: "WINNIE",
    files: ["WINNIE.png", "WINNIE2.png", "WINNIE3.png"],
    note: "Brown cottage garden",
    zipperColors: ["Brown"],
    liningColors: ["Brown"]
  },
  {
    name: "BROWN",
    files: ["BROWN.png"],
    note: "Corduroy",
    zipperColors: ["Brown"],
    liningColors: ["Brown"],
    details: [DEFAULT_WALLET_SIZE, "Suitable for all genders"]
  },
  {
    name: "BLACK",
    files: ["BLACK.png", "BLACK2.png"],
    note: "Corduroy",
    zipperColors: ["Black"],
    liningColors: ["Black"],
    details: [DEFAULT_WALLET_SIZE, "Suitable for all genders"]
  }
];

const PRODUCTS = PRODUCT_PHOTO_SETS.map(({ name, files, ...options }) => ({
  id: options.id || name.toLowerCase(),
  name,
  category: options.category || "wallet",
  image: options.image || IMG + files[0],
  isNew: options.isNew || false,
  images: options.images || [
    ...files.map((file) => IMG + file),
    ...((options.category || "wallet") === "wallet" ? [IMG + "WRISTLETS.png"] : [])
  ],
  note: options.note || (options.category === "everyday-pouch" ? "Everyday pouch" : "Handmade Mini wallet"),
  zipperColors: options.zipperColors || (options.category === "everyday-pouch" ? ["Cream"] : [...DEFAULT_ZIPPER_COLORS]),
  snapButtonColors: options.snapButtonColors || [],
  liningColors: options.liningColors || [...DEFAULT_LINING_COLORS],
  details: options.details || (options.category === "everyday-pouch"
    ? [
        "Approx. 4.5 x 4 x 7 inches (Height x Width x Length)",
        "Gold metal zipper pull"
      ]
    : [DEFAULT_WALLET_SIZE])
}));

const PRODUCTS_PER_PAGE = 8;

const $ = (sel) => document.querySelector(sel);
let activeFilter = "all";
let activeFilterEmptyMessage = "";
let activeFilterDescription = "";
let activeFilterFeatures = [];
let visibleProductCount = PRODUCTS_PER_PAGE;
let activeProduct = null;
let activeProductImages = [];
let activeImageIndex = 0;
let productImageLoadId = 0;

function getCategoryLabel(category) {
  if (category === "wallet") return "Mini wallet";
  if (category === "everyday-pouch") return "Everyday pouch";
  if (category === "cable-holder") return "Cable holder";
  return "Mini pouch";
}

function renderColorSwatches(listSelector, colors = []) {
  const list = $(listSelector);
  const group = list.closest(".color-group");
  list.replaceChildren(
    ...colors.map((color) => {
      const item = document.createElement("li");
      const swatch = document.createElement("span");
      swatch.className = `color-dot swatch-${color.toLowerCase().replaceAll(" ", "-")}`;
      swatch.setAttribute("aria-hidden", "true");
      item.append(swatch, document.createTextNode(color));
      return item;
    })
  );
  group.hidden = colors.length === 0;
}

function renderProducts() {
  const grid = $("#productGrid");
  const list = PRODUCTS.filter(
    (p) => activeFilter === "all"
      || (activeFilter === "new" ? p.isNew : p.category === activeFilter)
  );
  if (activeFilter === "all" || activeFilter === "everyday-pouch" || activeFilter === "new") {
    const categoryOrder = { wallet: 0, "everyday-pouch": 1 };
    const walletEndOrder = { BROWN: 1, BLACK: 2 };
    const everydayPouchEndOrder = { BROWN: 1, "BROWN ver2": 2 };
    list.sort((a, b) => {
      const categoryDifference = (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99);
      if (categoryDifference) return categoryDifference;

      if (a.category === "wallet") {
        const aEndOrder = walletEndOrder[a.name] || 0;
        const bEndOrder = walletEndOrder[b.name] || 0;
        if (aEndOrder !== bEndOrder) return aEndOrder - bEndOrder;
      }

      if (a.category === "everyday-pouch") {
        const aEndOrder = everydayPouchEndOrder[a.name] || 0;
        const bEndOrder = everydayPouchEndOrder[b.name] || 0;
        if (aEndOrder !== bEndOrder) return aEndOrder - bEndOrder;
      }

      return a.name.localeCompare(b.name);
    });
  }

  if (list.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.setAttribute("role", "status");
    emptyState.textContent = activeFilterEmptyMessage;
    grid.replaceChildren(emptyState);
    return;
  }

  const productCards = list.slice(0, visibleProductCount).map((p) => {
    const card = document.createElement("article");
    card.className = "card";

    const media = document.createElement("button");
    media.className = "card-media";
    media.setAttribute("aria-label", "View " + p.name);
    media.classList.add("is-loading");
    media.setAttribute("aria-busy", "true");
    media.addEventListener("click", () => openProduct(p.id));

    const img = document.createElement("img");
    img.alt = p.name;
    img.loading = "lazy";
    const finishLoading = () => {
      media.classList.remove("is-loading");
      media.setAttribute("aria-busy", "false");
    };
    img.addEventListener("load", finishLoading, { once: true });
    img.addEventListener("error", finishLoading, { once: true });
    img.src = p.image;
    media.append(img);

    const badges = [];
    if (p.isNew) badges.push({ label: "New" });
    if (p.soldOut) badges.push({ label: "Sold out", className: "sold-out-badge" });
    if (badges.length) {
      const badgeGroup = document.createElement("div");
      badgeGroup.className = "card-badges";
      badges.forEach(({ label, className = "" }) => {
        const badge = document.createElement("span");
        badge.className = `badge ${className}`.trim();
        badge.textContent = label;
        badgeGroup.append(badge);
      });
      media.append(badgeGroup);
    }

    const body = document.createElement("div");
    body.className = "card-body";

    const cat = document.createElement("p");
    cat.className = "card-cat";
    cat.textContent = getCategoryLabel(p.category);

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = p.name;

    const note = document.createElement("p");
    note.className = "card-note";
    note.textContent = p.note;

    const price = document.createElement("p");
    price.className = "card-price";
    price.textContent = PRODUCT_PRICES[p.category];

    const accentNote = document.createElement("span");
    accentNote.className = "card-note-badge";
    accentNote.textContent = p.category === "cable-holder" ? "Contrasting fabric lining" : "";

    const foot = document.createElement("div");
    foot.className = "card-foot";

    const view = document.createElement("button");
    view.className = "add-btn";
    view.textContent = "View details";
    view.addEventListener("click", (event) => {
      event.stopPropagation();
      openProduct(p.id);
    });

    foot.append(view);
    body.append(cat, title, note);
    if (p.category === "cable-holder") body.append(accentNote);
    body.append(price);
    body.append(foot);
    card.append(media, body);
    return card;
  });

  const content = [];
  if (activeFilterDescription) {
    const description = document.createElement("p");
    description.className = "filter-description";
    description.textContent = activeFilterDescription;
    content.push(description);
  }
  if (activeFilterFeatures.length) {
    const features = document.createElement("ul");
    features.className = "filter-features";
    features.setAttribute("aria-label", `${getCategoryLabel(activeFilter)} features`);
    activeFilterFeatures.forEach((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      features.append(item);
    });
    content.push(features);
  }
  content.push(...productCards);

  grid.replaceChildren(
    ...content
  );

  if (visibleProductCount < list.length) {
    const seeMore = document.createElement("button");
    seeMore.type = "button";
    seeMore.className = "btn btn-ghost see-more";
    seeMore.textContent = "See more";
    seeMore.addEventListener("click", () => {
      visibleProductCount = Math.min(visibleProductCount + PRODUCTS_PER_PAGE, list.length);
      renderProducts();
      $(".card:last-of-type .card-media")?.focus();
    });
    grid.append(seeMore);
  }
}

function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  activeProduct = p;
  activeProductImages = p.images || [p.image];
  activeImageIndex = 0;

  updateProductCarousel();
  $("#pmCat").textContent = getCategoryLabel(p.category);
  $("#pmTitle").textContent = p.name;
  $("#pmSoldOut").hidden = !p.soldOut;
  $("#pmDesc").textContent = p.desc || "";
  $("#pmDesc").hidden = !p.desc && p.category === "cable-holder";
  const details = p.category === "wallet"
    ? [
        ...p.details.filter((item) => item.startsWith("Approx.") || item === "Suitable for all genders"),
        "Includes a wristlet — color of your choice"
      ]
    : p.details;
  $("#pmMeta").innerHTML = details.map((item) => `<li>${item}</li>`).join("");
  const isWallet = p.category === "wallet";
  const isEverydayPouch = p.category === "everyday-pouch";
  const isCableHolder = p.category === "cable-holder";
  const hasColorOptions = isWallet || isEverydayPouch || isCableHolder;
  $("#pmOptions").hidden = !hasColorOptions;
  $("#pmOptions").setAttribute("aria-label", isWallet
    ? "Zipper, lining, and wristlet options"
    : isCableHolder
      ? "Snap button and lining options"
      : "Zipper and lining options");
  renderColorSwatches("#pmZipperColors", p.zipperColors);
  renderColorSwatches("#pmSnapButtonColors", p.snapButtonColors);
  renderColorSwatches("#pmLiningColors", p.liningColors);
  $("#pmZipperColors").closest(".color-group").hidden = !isWallet && !isEverydayPouch;
  $("#pmSnapButtonColors").closest(".color-group").hidden = !isCableHolder;
  $("#wristletColorsTitle").closest(".color-group").hidden = !isWallet;
  $("#pmNote").textContent = p.category === "cable-holder"
    ? "Please note: Since each piece is handmade, slight variations in size, shape, and placement may occur. Colors may also appear different depending on your monitor or screen settings."
    : "Please note: Colors may vary slightly depending on your screen or monitor.";
  $("#pmNote").hidden = !hasColorOptions && p.category !== "cable-holder";

  $("#productModal").hidden = false;
  document.body.style.overflow = "hidden";
}

function updateProductCarousel() {
  const image = $("#pmImage");
  const previous = $("#pmImagePrevious");
  const next = $("#pmImageNext");
  const indicators = $("#pmImageIndicators");
  const imageCount = activeProductImages.length;
  const media = image.closest(".pm-media");
  const imageLoadId = ++productImageLoadId;
  const imageSource = activeProductImages[activeImageIndex];

  media.classList.add("is-loading");
  media.setAttribute("aria-busy", "true");
  const finishLoading = () => {
    if (imageLoadId !== productImageLoadId) return;
    media.classList.remove("is-loading");
    media.setAttribute("aria-busy", "false");
    image.onload = null;
    image.onerror = null;
  };
  image.onload = finishLoading;
  image.onerror = finishLoading;
  image.src = imageSource;
  if (image.complete) finishLoading();
  image.alt = imageCount > 1
    ? `${activeProduct.name}, photo ${activeImageIndex + 1} of ${imageCount}`
    : activeProduct.name;
  previous.hidden = imageCount < 2;
  next.hidden = imageCount < 2;
  indicators.replaceChildren();

  activeProductImages.forEach((_, index) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.className = "pm-image-indicator";
    indicator.setAttribute("aria-label", `Show photo ${index + 1}`);
    indicator.setAttribute("aria-pressed", String(index === activeImageIndex));
    indicator.addEventListener("click", () => {
      activeImageIndex = index;
      updateProductCarousel();
    });
    indicators.append(indicator);
  });
  indicators.hidden = imageCount < 2;
}

function changeProductImage(direction) {
  if (activeProductImages.length < 2) return;
  activeImageIndex = (activeImageIndex + direction + activeProductImages.length) % activeProductImages.length;
  updateProductCarousel();
}

$("#pmImagePrevious").addEventListener("click", () => changeProductImage(-1));
$("#pmImageNext").addEventListener("click", () => changeProductImage(1));

function closeProductModal() {
  $("#productModal").hidden = true;
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) closeProductModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProductModal();
});

const mobileNavLinks = [...document.querySelectorAll(".mobile-nav a")];
const mobileNavSections = mobileNavLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

function updateMobileNav() {
  const viewportCenter = window.innerHeight / 2;
  const activeSection = mobileNavSections.find((section) => {
    const bounds = section.getBoundingClientRect();
    return bounds.top <= viewportCenter && bounds.bottom > viewportCenter;
  });

  mobileNavLinks.forEach((link) => {
    if (activeSection && link.hash === `#${activeSection.id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

const mobileNavObserver = new IntersectionObserver(updateMobileNav, {
  rootMargin: "-49% 0px -49% 0px"
});
mobileNavSections.forEach((section) => mobileNavObserver.observe(section));
updateMobileNav();
window.addEventListener("hashchange", updateMobileNav);

$("#filters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeFilter = chip.dataset.filter;
  activeFilterEmptyMessage = chip.dataset.emptyMessage || "";
  activeFilterDescription = chip.dataset.description || "";
  activeFilterFeatures = chip.dataset.features ? chip.dataset.features.split("|") : [];
  visibleProductCount = PRODUCTS_PER_PAGE;
  document.querySelectorAll(".chip").forEach((c) =>
    c.classList.toggle("is-active", c === chip)
  );
  renderProducts();
});

$("#year").textContent = new Date().getFullYear();
renderProducts();
