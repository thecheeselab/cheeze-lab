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

// Global State
let activeOrders = [
    { id: 1, name: "Order #1", customerName: "", orderType: "Dine-in", paymentMethod: "Cash", discountVal: 0, discountType: "flat", taxPercent: 0, items: [] }
];
let currentOrderId = 1;
let salesHistory = JSON.parse(localStorage.getItem('cheezeLabHistory')) || [];
let currentUserRole = "cashier";

window.onload = function() {
    renderMenu();
    renderTabs();
    renderOrder();
    renderHistory();
    updateDashboard();
    updateTopSellingItems();
};

function loginUser() {
    let u = document.getElementById('username');
    let p = document.getElementById('password');
    if (!u || !p) return;

    let user = u.value;
    let pass = p.value;

    if (user === "CH ZOHAIR" && pass === "1435") {
        currentUserRole = "admin";
        if (document.getElementById('admin-clear-btn')) document.getElementById('admin-clear-btn').style.display = 'inline-block';
    } else if (user === "cashier" && pass === "111") {
        currentUserRole = "cashier";
        if (document.getElementById('admin-clear-btn')) document.getElementById('admin-clear-btn').style.display = 'none';
    } else {
        if (document.getElementById('login-error')) document.getElementById('login-error').style.display = 'block';
        return;
    }

    if (document.getElementById('login-modal')) document.getElementById('login-modal').style.display = 'none';
    if (document.getElementById('user-info')) document.getElementById('user-info').style.display = 'block';
    if (document.getElementById('logged-user')) document.getElementById('logged-user').innerText = `User: ${user.toUpperCase()}`;
}

function logoutUser() {
    location.reload();
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    if (!container) return;
    container.innerHTML = '';
    for (let category in menuData) {
        let catDiv = document.createElement('div');
        catDiv.className = 'menu-category-block';
        catDiv.innerHTML = `<h3 style="margin-top:15px; border-bottom:2px solid #ff4757; padding-bottom:3px; font-size:16px;">${category}</h3>`;
        let grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
        grid.style.gap = '8px';

        menuData[category].forEach(item => {
            let card = document.createElement('div');
            card.className = 'card menu-item-card';
            card.setAttribute('data-name', item.name.toLowerCase());
            card.innerHTML = `
                <p style="margin:4px 0; font-weight:bold; font-size:12px;">${item.name}</p>
                <p style="margin:2px 0; color:#555; font-size:11px;">Rs. ${item.price}</p>
                <button onclick="addToOrder('${item.name}', ${item.price})" style="padding:4px 8px; font-size:11px;">+ Add</button>
            `;
            grid.appendChild(card);
        });
        catDiv.appendChild(grid);
        container.appendChild(catDiv);
    }
}

function filterMenu() {
    let input = document.getElementById('menu-search-input');
    if (!input) return;
    let query = input.value.toLowerCase();
    document.querySelectorAll('.menu-item-card').forEach(card => {
        let name = card.getAttribute('data-name');
        card.style.display = name.includes(query) ? 'block' : 'none';
    });
}

function createNewOrderTab() {
    const newId = Date.now();
    activeOrders.push({
        id: newId,
        name: `Order #${activeOrders.length + 1}`,
        customerName: "",
        orderType: "Dine-in",
        paymentMethod: "Cash",
        discountVal: 0,
        discountType: "flat",
        taxPercent: 0,
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
    if (event) event.stopPropagation();
    if (activeOrders.length === 1) {
        alert("At least one active order tab is required!");
        return;
    }
    activeOrders = activeOrders.filter(o => o.id !== orderId);
    if (currentOrderId === orderId) currentOrderId = activeOrders[0].id;
    renderTabs();
    renderOrder();
}

function renderTabs() {
    const container = document.getElementById('order-tabs-list');
    if (!container) return;
    container.innerHTML = '';
    activeOrders.forEach(order => {
        let btn = document.createElement('button');
        btn.className = `tab-btn ${order.id === currentOrderId ? 'active-tab' : ''}`;
        btn.onclick = () => switchTab(order.id);
        let label = order.customerName ? `${order.name} (${order.customerName})` : order.name;
        btn.innerHTML = `${label} <span onclick="closeOrderTab(${order.id}, event)" style="margin-left:6px; color:red; font-weight:bold;">×</span>`;
        container.appendChild(btn);
    });
}

function getCurrentOrder() {
    return activeOrders.find(o => o.id === currentOrderId);
}

function addToOrder(name, price) {
    let order = getCurrentOrder();
    if (!order) return;
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
    if (!order) return;
    order.items[index].qty += change;
    if (order.items[index].qty <= 0) order.items.splice(index, 1);
    renderOrder();
}

function updateCurrentOrderMeta() {
    let order = getCurrentOrder();
    if (order) {
        order.customerName = document.getElementById('customer-name')?.value || '';
        order.orderType = document.getElementById('order-type')?.value || 'Dine-in';
        order.paymentMethod = document.getElementById('payment-method')?.value || 'Cash';
        renderTabs();
    }
}

function renderOrder() {
    let order = getCurrentOrder();
    if (!order) return;

    if (document.getElementById('customer-name')) document.getElementById('customer-name').value = order.customerName || '';
    if (document.getElementById('order-type')) document.getElementById('order-type').value = order.orderType || 'Dine-in';
    if (document.getElementById('payment-method')) document.getElementById('payment-method').value = order.paymentMethod || 'Cash';
    if (document.getElementById('discount-val')) document.getElementById('discount-val').value = order.discountVal || 0;
    if (document.getElementById('discount-type')) document.getElementById('discount-type').value = order.discountType || 'flat';
    if (document.getElementById('tax-percent')) document.getElementById('tax-percent').value = order.taxPercent || 0;

    const list = document.getElementById('order-list');
    if (!list) return;
    list.innerHTML = '';

    order.items.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        let li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.margin = '4px 0';
        li.style.fontSize = '12px';
        li.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <div>
                <span style="margin-right:8px;">Rs. ${itemTotal}</span>
                <button onclick="updateQty(${index}, 1)" class="no-print">+</button>
                <button onclick="updateQty(${index}, -1)" class="no-print">-</button>
            </div>
        `;
        list.appendChild(li);
    });

    calculateTotals();
}

function calculateTotals() {
    let order = getCurrentOrder();
    if (!order) return;

    order.discountVal = parseFloat(document.getElementById('discount-val')?.value) || 0;
    order.discountType = document.getElementById('discount-type')?.value || 'flat';
    order.taxPercent = parseFloat(document.getElementById('tax-percent')?.value) || 0;

    let subtotal = order.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discountAmount = order.discountType === 'flat' ? order.discountVal : (subtotal * order.discountVal) / 100;
    let afterDiscount = Math.max(0, subtotal - discountAmount);
    let taxAmount = (afterDiscount * order.taxPercent) / 100;
    let grandTotal = Math.round(afterDiscount + taxAmount);

    if (document.getElementById('sub-total')) document.getElementById('sub-total').innerText = subtotal;
    if (document.getElementById('print-discount-str')) document.getElementById('print-discount-str').innerText = `Rs. ${Math.round(discountAmount)}`;
    if (document.getElementById('print-tax-str')) document.getElementById('print-tax-str').innerText = `Rs. ${Math.round(taxAmount)}`;
    if (document.getElementById('total-price')) document.getElementById('total-price').innerText = grandTotal;
}

function savePaidOrder() {
    let order = getCurrentOrder();
    if (!order || order.items.length === 0) {
        alert("Cannot process empty order!");
        return;
    }

    let subtotal = order.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discountAmount = order.discountType === 'flat' ? order.discountVal : (subtotal * order.discountVal) / 100;
    let afterDiscount = Math.max(0, subtotal - discountAmount);
    let taxAmount = (afterDiscount * order.taxPercent) / 100;
    let grandTotal = Math.round(afterDiscount + taxAmount);

    let itemsArray = order.items.map(i => ({ name: i.name, qty: i.qty }));
    let itemsStr = order.items.map(i => `${i.name} (x${i.qty})`).join(', ');

    let now = new Date();
    let record = {
        dateStr: now.toLocaleDateString(),
        timeStr: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        fullISO: now.toISOString().split('T')[0],
        monthYear: now.toISOString().slice(0, 7),
        customerName: order.customerName || 'Walk-in Customer',
        orderType: order.orderType || 'Dine-in',
        paymentMethod: order.paymentMethod || 'Cash',
        itemsStr: itemsStr,
        itemsList: itemsArray,
        total: grandTotal
    };

    salesHistory.unshift(record);
    localStorage.setItem('cheezeLabHistory', JSON.stringify(salesHistory));

    printOnly();

    order.items = [];
    order.customerName = "";
    order.orderType = "Dine-in";
    order.paymentMethod = "Cash";
    order.discountVal = 0;
    order.taxPercent = 0;

    renderOrder();
    renderTabs();
    renderHistory();
    updateDashboard();
    updateTopSellingItems();
}

function printOnly() {
    let order = getCurrentOrder();
    let now = new Date();
    if (document.getElementById('print-date')) document.getElementById('print-date').innerText = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    if (document.getElementById('print-cust-name')) document.getElementById('print-cust-name').innerText = order.customerName || 'Walk-in Customer';
    if (document.getElementById('print-order-type')) document.getElementById('print-order-type').innerText = order.orderType || 'Dine-in';
    if (document.getElementById('print-pay-method')) document.getElementById('print-pay-method').innerText = order.paymentMethod || 'Cash';
    window.print();
}

function updateDashboard() {
    const todayISO = new Date().toISOString().split('T')[0];
    const currentMonthISO = new Date().toISOString().slice(0, 7);

    let todaySales = 0, todayOrders = 0, monthSales = 0, monthOrders = 0;

    salesHistory.forEach(r => {
        let recDate = r.fullISO || "";
        let recMonth = r.monthYear || (recDate ? recDate.slice(0, 7) : "");

        if (recDate === todayISO) {
            todaySales += r.total;
            todayOrders += 1;
        }
        if (recMonth === currentMonthISO) {
            monthSales += r.total;
            monthOrders += 1;
        }
    });

    if (document.getElementById('stat-today-sales')) document.getElementById('stat-today-sales').innerText = todaySales;
    if (document.getElementById('stat-today-orders')) document.getElementById('stat-today-orders').innerText = todayOrders;
    if (document.getElementById('stat-month-sales')) document.getElementById('stat-month-sales').innerText = monthSales;
    if (document.getElementById('stat-month-orders')) document.getElementById('stat-month-orders').innerText = monthOrders;
}
function updateTopSellingItems() {
    let itemCounts = {};

    salesHistory.forEach(r => {
        if (r.itemsList && Array.isArray(r.itemsList)) {
            r.itemsList.forEach(item => {
                itemCounts[item.name] = (itemCounts[item.name] || 0) + item.qty;
            });
        }
    });

    let sorted = Object.keys(itemCounts)
        .map(key => ({ name: key, count: itemCounts[key] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    const list = document.getElementById('top-selling-list');
    if (!list) return;
    list.innerHTML = '';

    if (sorted.length === 0) {
        list.innerHTML = '<li>No sales data yet.</li>';
        return;
    }

    sorted.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> - ${item.count} sold`;
        list.appendChild(li);
    });
}

function renderHistory(recordsToDisplay = salesHistory) {
    const tbody = document.getElementById('history-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (recordsToDisplay.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No records found.</td></tr>`;
        return;
    }

    recordsToDisplay.forEach(r => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${r.dateStr} ${r.timeStr}</td>
            <td>${r.customerName}</td>
            <td><strong>${r.orderType}</strong></td>
            <td>${r.paymentMethod || 'Cash'}</td>
            <td>${r.itemsStr || ''}</td>
            <td>Rs. ${r.total}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterHistoryByDateRange() {
    const fromDate = document.getElementById('history-from-date')?.value;
    const toDate = document.getElementById('history-to-date')?.value;

    if (!fromDate && !toDate) return alert("Select at least one date!");

    let filtered = salesHistory.filter(r => {
        let rec = r.fullISO;
        if (fromDate && toDate) return rec >= fromDate && rec <= toDate;
        if (fromDate) return rec >= fromDate;
        if (toDate) return rec <= toDate;
        return true;
    });

    renderHistory(filtered);
}

function clearDateFilter() {
    if (document.getElementById('history-from-date')) document.getElementById('history-from-date').value = '';
    if (document.getElementById('history-to-date')) document.getElementById('history-to-date').value = '';
    renderHistory(salesHistory);
}

function exportToCSV() {
    if (salesHistory.length === 0) return alert("No history to export!");
    let csvContent = "data:text/csv;charset=utf-8,Date,Time,Customer,Order Type,Payment Method,Items,Total Amount\n";
    salesHistory.forEach(r => {
        csvContent += `"${r.dateStr}","${r.timeStr}","${r.customerName}","${r.orderType}","${r.paymentMethod || 'Cash'}","${r.itemsStr}",${r.total}\n`;
    });
    let link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `Cheeze_Lab_Sales_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportSystemData() {
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(salesHistory));
    let downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `CheezeLab_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importSystemData(event) {
    let file = event.target.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = function(e) {
        try {
            let importedHistory = JSON.parse(e.target.result);
            if (Array.isArray(importedHistory)) {
                salesHistory = importedHistory;
                localStorage.setItem('cheezeLabHistory', JSON.stringify(salesHistory));
                renderHistory();
                updateDashboard();
                updateTopSellingItems();
                alert("Data restored successfully!");
            } else {
                alert("Invalid Backup File Format!");
            }
        } catch (err) {
            alert("Error reading backup file!");
        }
    };
    reader.readAsText(file);
}

function clearHistoryByAdmin() {
    if (currentUserRole !== "admin") return;
    if (confirm("Clear all sales history? This action cannot be undone.")) {
        salesHistory = [];
        localStorage.removeItem('cheezeLabHistory');
        renderHistory();
        updateDashboard();
        updateTopSellingItems();
    }
}