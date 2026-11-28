
const MENU = [
  {id:1, name:"Margherita Pizza", cat:"pizza",  price:120 },
  {id:2, name:"Pepperoni Pizza",  cat:"pizza",  price:150},
  {id:3, name:"Veggie Pizza",     cat:"pizza",  price:130},
  {id:4, name:"Classic Burger",   cat:"burger", price:90},
  {id:5, name:"Cheese Burger",    cat:"burger", price:105},
  {id:6, name:"Chicken Burger",   cat:"burger", price:95},
  {id:7, name:"Cola",             cat:"drinks", price:20},
  {id:8, name:"Orange Juice",     cat:"drinks", price:30},
  {id:9, name:"Iced Coffee",      cat:"drinks", price:40},
];
function dishCard(d) {
  return `
    <div class="card">
      <h3>${d.name}</h3>
      <div class="price">${d.price} EGP</div>
    </div>`;
 
}
let category = "all", query = "";
const grid = document.getElementById("menuGrid");

function renderMenu(){
  const list = MENU.filter(d =>
    (category === "all" || d.cat === category) &&
    d.name.toLowerCase().includes(query.toLowerCase()));
  grid.innerHTML = list.length ? list.map(dishCard).join("")
    : `<p class="empty">No dishes match "${query.replace(/</g,"&lt;")}". Try another word or category.</p>`;
}
document.getElementById("searchInput").addEventListener("input", e => { query = e.target.value.trim(); renderMenu(); });
document.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active"); category = chip.dataset.category; renderMenu();
}));
renderMenu();