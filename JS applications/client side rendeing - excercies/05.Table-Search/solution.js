import { html, render } from "../node_modules/lit-html/lit-html.js";

const mainEl = document.querySelector("tbody");

async function solve() {
   const baseUrl = "http://localhost:3030/jsonstore/advanced/table";
   document.querySelector("#searchBtn").addEventListener("click", onClick);

   try {
      const response = await fetch(baseUrl);

      if (!response.ok) {
         let error = await response.json();
         throw new Error(error.message);
      }

      const data = await response.json();
      const values = Object.values(data);

     
      render(values.map(renderingTemplate), mainEl);
   } catch (error) {
      console.error("Error:", error.message);
   }
}

function onClick() {
   const inputField = document.getElementById("searchField").value.trim().toLowerCase();
   const allRows = document.querySelectorAll("tbody tr");

   allRows.forEach(row => {
      const cells = Array.from(row.querySelectorAll("td"));
      const found = cells.some(cell => cell.textContent.toLowerCase().includes(inputField));

   
      if (inputField !== "" && found) {
         row.classList.add("select");
      } else {
         row.classList.remove("select");
      }
   });
}

function renderingTemplate(data) {
   return html`
      <tr>
         <td>${data.firstName} ${data.lastName}</td>
         <td>${data.email}</td>
         <td>${data.course}</td>
      </tr>
   `;
}

solve();
