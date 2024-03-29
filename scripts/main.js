import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <header class="title">
        <img src="../img/coffee.png" alt="Brewed Awakenings">
    </header>
    <article class="details">
        <section class="detail--column list details__employees">
            <h2>Employees</h2>
            ${Employees()}
        </section>
        <section class="detail--column list details__products">
            <h2>Products</h2>
            ${Products()}
        </section>
    </article>
    <article class="orders">
        <h1>Orders</h1>
        ${Orders()}
    </article>
`

mainContainer.innerHTML = applicationHTML

