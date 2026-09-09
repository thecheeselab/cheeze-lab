// Complete Menu Data
const menuData = {
    "Special Pizzas": [
        { name: "Cheeze Lab Special Pizza (S)", price: 600 },
        { name: "Cheeze Lab Special Pizza (M)", price: 1300 },
        { name: "Cheeze Lab Special Pizza (L)", price: 1850 },
        { name: "Cheeze Lab Special Pizza (XL)", price: 2150 },
        { name: "Malai Boti Pizza (S)", price: 600 },
        { name: "Malai Boti Pizza (M)", price: 1250 },
        { name: "Malai Boti Pizza (L)", price: 1800 },
        { name: "Malai Boti Pizza (XL)", price: 2150 },
        { name: "Kabab Crust Pizza (S)", price: 600 },
        { name: "Kabab Crust Pizza (M)", price: 1250 },
        { name: "Kabab Crust Pizza (L)", price: 1800 },
        { name: "Kabab Crust Pizza (XL)", price: 2150 },
        { name: "Crown Crust Pizza (S)", price: 600 },
        { name: "Crown Crust Pizza (M)", price: 1250 },
        { name: "Crown Crust Pizza (L)", price: 1899 },
        { name: "Crown Crust Pizza (XL)", price: 2150 },
        { name: "Chicken/Cheese Stuffer Pizza (S)", price: 600 },
        { name: "Chicken/Cheese Stuffer Pizza (M)", price: 1250 },
        { name: "Chicken/Cheese Stuffer Pizza (L)", price: 1899 },
        { name: "Chicken/Cheese Stuffer Pizza (XL)", price: 2150 },
        { name: "Square Pizza Mix (S)", price: 600 },
        { name: "Square Pizza Mix (M)", price: 1250 },
        { name: "Square Pizza Mix (L)", price: 1800 },
        { name: "Square Pizza Mix (XL)", price: 2150 }
    ],
    "Vintage Pizzas": [
        { name: "Chicken Tikka Pizza (S)", price: 500 },
        { name: "Chicken Tikka Pizza (M)", price: 1050 },
        { name: "Chicken Tikka Pizza (L)", price: 1399 },
        { name: "Chicken Tikka Pizza (XL)", price: 1850 },
        { name: "Chicken Fajita Pizza (S)", price: 500 },
        { name: "Chicken Fajita Pizza (M)", price: 1050 },
        { name: "Chicken Fajita Pizza (L)", price: 1399 },
        { name: "Chicken Fajita Pizza (XL)", price: 1850 },
        { name: "Pepperoni Slice Pizza (S)", price: 500 },
        { name: "Pepperoni Slice Pizza (M)", price: 1050 },
        { name: "Pepperoni Slice Pizza (L)", price: 1399 },
        { name: "Pepperoni Slice Pizza (XL)", price: 1850 },
        { name: "Hot & Spicy Pizza (S)", price: 500 },
        { name: "Hot & Spicy Pizza (M)", price: 1050 },
        { name: "Hot & Spicy Pizza (L)", price: 1399 },
        { name: "Hot & Spicy Pizza (XL)", price: 1850 },
        { name: "Sausages Pizza (S)", price: 500 },
        { name: "Sausages Pizza (M)", price: 1050 },
        { name: "Sausages Pizza (L)", price: 1399 },
        { name: "Sausages Pizza (XL)", price: 1850 },
        { name: "Thin Crust Pizza (S)", price: 500 },
        { name: "Thin Crust Pizza (M)", price: 1050 },
        { name: "Thin Crust Pizza (L)", price: 1399 },
        { name: "Thin Crust Pizza (XL)", price: 1850 }
    ],
    "Burgers, Sandwiches & Wraps": [
        { name: "Tower Burger", price: 550 },
        { name: "Zinger Burger", price: 350 },
        { name: "Cheese Zinger Burger", price: 400 },
        { name: "Grill Burger", price: 450 },
        { name: "Chapli Kabab Burger", price: 300 },
        { name: "Patty Burger", price: 290 },
        { name: "Cheese Lab Special Sandwich", price: 600 },
        { name: "Crispy Sandwich", price: 550 },
        { name: "Grill Sandwich", price: 550 },
        { name: "Cheeze Lab Special Wrap", price: 550 },
        { name: "Grill Wrap", price: 550 },
        { name: "BBQ Wrap", price: 500 }
    ],
    "Fries & Pasta": [
        { name: "Plain Fries (Half)", price: 220 },
        { name: "Plain Fries (Full)", price: 320 },
        { name: "Mayo Fries (Half)", price: 250 },
        { name: "Mayo Fries (Full)", price: 450 },
        { name: "Pizza Fries (Half)", price: 400 },
        { name: "Pizza Fries (Full)", price: 750 },
        { name: "Loaded Fries (Half)", price: 350 },
        { name: "Loaded Fries (Full)", price: 600 },
        { name: "Loaded Zinger Fries (Half)", price: 370 },
        { name: "Loaded Zinger Fries (Full)", price: 620 },
        { name: "Masala Fries (Half)", price: 230 },
        { name: "Masala Fries (Full)", price: 330 },
        { name: "Cheeze Lab Special Pasta (Half)", price: 450 },
        { name: "Cheeze Lab Special Pasta (Full)", price: 800 },
        { name: "Creamy Pasta (Half)", price: 440 },
        { name: "Creamy Pasta (Full)", price: 790 },
        { name: "White Sauce Pasta (Half)", price: 440 },
        { name: "White Sauce Pasta (Full)", price: 790 }
    ],
    "Shawarma, Rolls, Wings & Nuggets": [
        { name: "Chicken Shawarma", price: 220 },
        { name: "Zinger Shawarma", price: 250 },
        { name: "Malai Boti Shawarma", price: 260 },
        { name: "Shawarma Platter", price: 450 },
        { name: "Crispy Roll", price: 260 },
        { name: "Malai Boti Roll", price: 280 },
        { name: "Kabab Roll", price: 250 },
        { name: "Spin Roll Special", price: 500 },
        { name: "Hot Wings (6 Pcs)", price: 320 },
        { name: "Hot Wings (12 Pcs)", price: 600 },
        { name: "Oven Baked Wings (6 Pcs)", price: 320 },
        { name: "Oven Baked Wings (12 Pcs)", price: 600 },
        { name: "Honey Wings (6 Pcs)", price: 349 },
        { name: "Honey Wings (12 Pcs)", price: 650 },
        { name: "Hot Shots (06 Pcs)", price: 300 },
        { name: "Hot Shots (12 Pcs)", price: 550 },
        { name: "Nuggets (06 Pcs)", price: 250 },
        { name: "Nuggets (12 Pcs)", price: 480 }
    ],
    "Special Deals": [
        { name: "Student Deal", price: 650 },
        { name: "Couple Deal", price: 1299 },
        { name: "Family Deal", price: 3499 },
        { name: "Birthday Deal", price: 6999 },
        { name: "Big Deal", price: 3199 },
        { name: "Snack Deal", price: 499 }
    ],
    "Signature Shakes": [
        { name: "Strawberry Shake", price: 280 },
        { name: "Banana Shake", price: 220 },
        { name: "Apple Shake", price: 220 },
        { name: "Mango Shake", price: 220 },
        { name: "Khoya Khajoor Shake", price: 320 },
        { name: "Dairy Milk Shake", price: 400 },
        { name: "Pista Shake", price: 400 }
    ],
    "Cold Drinks & Water": [
        { name: "Coke (500 ML)", price: 130 },
        { name: "Sprite (500 ML)", price: 130 },
        { name: "Mint Sprite (500 ML)", price: 130 },
        { name: "Mineral Water (500 ML)", price: 70 },
        { name: "Coke (1 Liter)", price: 180 },
        { name: "Sprite (1 Liter)", price: 180 },
        { name: "Mint Sprite (1 Liter)", price: 180 },
        { name: "Coke (1.5 Liter)", price: 210 },
        { name: "Sprite (1.5 Liter)", price: 210 },
        { name: "Mint Sprite (1.5 Liter)", price: 210 },
        { name: "Mineral Water (1.5 Liter)", price: 120 },
        { name: "Coke (2 Liter)", price: 240 },
        { name: "Sprite (2 Liter)", price: 240 },
        { name: "Mint Sprite (2 Liter)", price: 240 }
    ]
};

// State Variables
let activeOrders = [
    { id: 1, name: "Order #1", customerName: "", orderType: "Dine-in", items: [] }
];
let currentOrderId = 1;
let salesHistory = JSON.parse(localStorage.getItem('cheezeLabHistory')) || [];
let currentUserRole = "cashier";

window.onload = function() {
    renderMenu();
    renderTabs();
    renderOrder();
    renderHistory();
};

// Render Menu
function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
    for (let category in menuData) {
        let catDiv = document.createElement('div');
        catDiv.className = 'menu-category-block';
        catDiv.innerHTML = `<h3 style="margin-top:20px; border-bottom:2px solid #ff4757; padding-bottom:5px;">${category}</h3>`;
        let grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(160px, 1fr))';
        grid.style.gap = '10px';

        menuData[category].forEach(item => {
            let card = document.createElement('div');
            card.className = 'card menu-item-card';
            card.setAttribute('data-name', item.name.toLowerCase());
            card.innerHTML = `
                <p style="margin:5px 0; font-weight:bold; font-size:13px;">${item.name}</p>
                <p style="margin:5px 0; color:#555; font-size:12px;">Rs. ${item.price}</p>
                <button onclick="addToOrder('${item.name}', ${item.price})">+ Add</button>
            `;
            grid.appendChild(card);
        });
        catDiv.appendChild(grid);
        container.appendChild(catDiv);
    }
}

// Menu Search Filter
function filterMenu() {
    let query = document.getElementById('menu-search-input').value.toLowerCase();
    let cards = document.querySelectorAll('.menu-item-card');

    cards.forEach(card => {
        let name = card.getAttribute('data-name');
        if (name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Multi-Order Tab System
function createNewOrderTab() {
    const newId = Date.now();
    activeOrders.push({
        id: newId,
        name: `Order #${activeOrders.length + 1}`,
        customerName: "",
        orderType: "Dine-in",
        items: []
    });
    switchTab(newId);
}

function switchTab(orderId) {
    currentOrderId = orderId;
    renderTabs();
    renderOrder();
}

function closeOrderTab(orderId, event) {
    event.stopPropagation();
    if (activeOrders.length === 1) {
        alert("At least one active order tab is required!");
        return;
    }
    activeOrders = activeOrders.filter(o => o.id !== orderId);
    if (currentOrderId === orderId) {
        currentOrderId = activeOrders[0].id;
    }
    renderTabs();
    renderOrder();
}

function renderTabs() {
    const container = document.getElementById('order-tabs-list');
    container.innerHTML = '';
    activeOrders.forEach(order => {
        let btn = document.createElement('button');
        btn.className = `tab-btn ${order.id === currentOrderId ? 'active-tab' : ''}`;
        btn.onclick = () => switchTab(order.id);
        
        let tabLabel = `${order.name}`;
        if (order.customerName) tabLabel += ` (${order.customerName})`;

        btn.innerHTML = `${tabLabel} <span onclick="closeOrderTab(${order.id}, event)" style="margin-left:8px; color:red; font-weight:bold;">×</span>`;
        container.appendChild(btn);
    });
}

function getCurrentOrder() {
    return activeOrders.find(o => o.id === currentOrderId);
}

// Add / Remove Items
function addToOrder(name, price) {
    let order = getCurrentOrder();
    let existing = order.items.find(i => i.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        order.items.push({ name, price, qty: 1 });
    }
    renderOrder();
}

function updateQty(index, change) {
    let order = getCurrentOrder();
    order.items[index].qty += change;
    if (order.items[index].qty <= 0) {
        order.items.splice(index, 1);
    }
    renderOrder();
}

function updateCurrentOrderMeta() {
    let order = getCurrentOrder();
    if (order) {
        order.customerName = document.getElementById('customer-name').value;
        order.orderType = document.getElementById('order-type').value;
        renderTabs();
    }
}

function renderOrder() {
    let order = getCurrentOrder();
    if (!order) return;

    document.getElementById('customer-name').value = order.customerName || '';
    document.getElementById('order-type').value = order.orderType || 'Dine-in';

    const list = document.getElementById('order-list');
    list.innerHTML = '';
    let total = 0;

    order.items.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        let li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.margin = '8px 0';
        li.innerHTML = `
            <span style="font-size:13px;">${item.name} x${item.qty}</span>
            <div>
                <span style="margin-right:10px; font-size:13px;">Rs. ${itemTotal}</span>
                <button onclick="updateQty(${index}, 1)">+</button>
                <button onclick="updateQty(${index}, -1)">-</button>
            </div>
        `;
        list.appendChild(li);
    });

    document.getElementById('total-price').innerText = total;
}

// Save Order to History
function savePaidOrder() {
    let order = getCurrentOrder();
    if (order.items.length === 0) {
        alert("Cannot process empty order!");
        return;
    }

    let total = order.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let itemsStr = order.items.map(i => `${i.name} (x${i.qty})`).join(', ');
    
    let now = new Date();
    let record = {
        dateStr: now.toLocaleDateString(),
        timeStr: now.toLocaleTimeString(),
        fullISO: now.toISOString().split('T')[0],
        customerName: order.customerName || 'Walk-in Customer',
        orderType: order.orderType || 'Dine-in',
        items: itemsStr,
        total: total
    };

    salesHistory.unshift(record);
    localStorage.setItem('cheezeLabHistory', JSON.stringify(salesHistory));

    printOnly();

    // Reset current order
    order.items = [];
    order.customerName = "";
    order.orderType = "Dine-in";
    renderOrder();
    renderTabs();
    renderHistory();
}

// Print Handler
function printOnly() {
    let order = getCurrentOrder();
    document.getElementById('print-cust-name').innerText = order.customerName || 'Walk-in Customer';
    document.getElementById('print-order-type').innerText = order.orderType || 'Dine-in';
    window.print();
}

// Render Sales History with Date Filter
function renderHistory(filteredDate = null) {
    const tbody = document.getElementById('history-table-body');
    tbody.innerHTML = '';

    let recordsToDisplay = salesHistory;
    if (filteredDate) {
        recordsToDisplay = salesHistory.filter(r => r.fullISO === filteredDate);
    }

    if (recordsToDisplay.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No records found.</td></tr>`;
        return;
    }

    recordsToDisplay.forEach(r => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${r.dateStr} ${r.timeStr}</td>
            <td>${r.customerName}</td>
            <td><strong>${r.orderType}</strong></td>
            <td>${r.items}</td>
            <td>Rs. ${r.total}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterHistoryByDate() {
    const selectedDate = document.getElementById('history-date-filter').value;
    renderHistory(selectedDate);
}

function clearDateFilter() {
    document.getElementById('history-date-filter').value = '';
    renderHistory();
}

// Export History to CSV
function exportToCSV() {
    if (salesHistory.length === 0) {
        alert("No history to export!");
        return;
    }
    let csvContent = "data:text/csv;charset=utf-8,Date & Time,Customer Name,Order Type,Items,Total\n";
    salesHistory.forEach(r => {
        csvContent += `"${r.dateStr} ${r.timeStr}","${r.customerName}","${r.orderType}","${r.items}",${r.total}\n`;
    });
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Sales_History_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Login Handler
function loginUser() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (user === "CH ZOHAIR" && pass === "1435") {
        currentUserRole = "admin";
        document.getElementById('admin-clear-btn').style.display = 'inline-block';
    } else if (user === "cashier" && pass === "111") {
        currentUserRole = "cashier";
        document.getElementById('admin-clear-btn').style.display = 'none';
    } else {
        document.getElementById('login-error').style.display = 'block';
        return;
    }

    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('logged-user').innerText = `User: ${user.toUpperCase()}`;
}

function logoutUser() {
    location.reload();
}

function clearHistoryByAdmin() {
    if (currentUserRole !== "admin") return;
    if (confirm("Are you sure you want to clear all sales history?")) {
        salesHistory = [];
        localStorage.removeItem('cheezeLabHistory');
        renderHistory();
    }
}