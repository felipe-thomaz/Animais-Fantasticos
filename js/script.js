import ScrollSuave from "./modules/scroll-suave.js";
import initAccordion from "./modules/accordion.js"
import TabNav from "./modules/tabnav.js"; 
import initModal from "./modules/modal.js"
import initTooltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
//não precisa importar o initOutsideClick, pois ele já está sendo importado pelo "dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBitcoin from "./modules/fetch-bitcoin.js"
import initAnimacaoScroll from "./modules/scroll-animacao.js"

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init();

initAccordion();

const tabnav = new TabNav();

// '[data-tab="menu"] li'
// '[data-tab="content"] section'

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
