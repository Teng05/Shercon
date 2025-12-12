const activitiesData = [
        {
            name: "2025 Team Building Packages",
            subtitle: "Corporate Training & Activities",
            price: "Starting at Php 1,150.00/pax",
            description: "Comprehensive corporate packages, managed by Traverse Outdoor. Includes facilitators, activities (Tower Activity, Maze), materials, meals, and accommodation (for overnight). Minimum of 30 persons.",
            image: "Pics/Activity/TeamBuild.jpg",
            tags: ["Corporate", "Package", "2025 Rate"],
            buttonText: "Inquire Now",
            features: [
                { icon: 'fas fa-users', text: 'Min. 30 Persons' },
                { icon: 'fas fa-calendar-alt', text: 'Daytour & Overnight Options' },
                { icon: 'fas fa-handshake', text: 'Includes Facilitators & Meals' },
                { icon: 'fas fa-dollar-sign', text: '+ 12% VAT' }
            ],
            details: [
                { label: 'Corporate Daytour', value: 'Php 1,150.00/pax' },
                { label: 'Overnight (Multiple Sharing)', value: 'Php 2,850.00/pax' },
                { label: 'Overnight (Triple Sharing)', value: 'Php 3,150.00/pax' },
                { label: 'Overnight (Twin Sharing)', value: 'Php 3,650.00/pax' },
                { label: '2026 Daytour Rate (Preview)', value: 'P1,250.00/pax' }
            ]
        },
        {
            name: "Overnight Group Packages",
            subtitle: "Room and Function Hall Rental Only",
            price: "Starting at Php 1,200.00/pax",
            description: "Accommodation and function hall rental only for groups of 30 persons or more. Meals, service, and facilitators are NOT included in this rate. Check-in is 3 PM, Check-out is 12 NN.",
            image: "Pics/Activity/Accommodation.jpg",
            tags: ["Group", "Accommodation", "Minimum 30"],
            buttonText: "Check Availability",
            features: [
                { icon: 'fas fa-bed', text: 'Room & Function Hall' },
                { icon: 'fas fa-times', text: 'Meals NOT Included' },
                { icon: 'fas fa-users', text: 'Min. 30 Persons' },
                { icon: 'fas fa-dollar-sign', text: '+ 12% VAT' }
            ],
            details: [
                { label: 'Multiple Sharing', value: 'Php 1,200.00/pax' },
                { label: 'Triple Sharing', value: 'Php 1,500.00/pax' },
                { label: 'Twin Sharing', value: 'Php 2,000.00/pax' }
            ]
        },
        {
            name: "Meal Packages (Managed Buffet)",
            subtitle: "Breakfast, Lunch, Dinner & Snacks",
            price: "Starting at Php 100.00/pax (2025 rate)",
            description: "Managed Buffet setup available for a minimum of 30 persons. Meal selections are available upon request. Rates for 2025 and 2026 are listed.",
            image: "Pics/Activity/Buffet.jpg",
            tags: ["Food", "Minimum 30", "Buffet"],
            buttonText: "View Menu",
            features: [
                { icon: 'fas fa-utensils', text: 'Managed Buffet Setup' },
                { icon: 'fas fa-coffee', text: 'Includes Beverages' },
                { icon: 'fas fa-users', text: 'Min. 30 Persons' },
                { icon: 'fas fa-dollar-sign', text: '+ 12% VAT' }
            ],
            details: [
                { label: '2025 AM/PM Snack', value: 'Php 100.00/pax' },
                { label: '2025 Breakfast', value: 'Php 200.00/pax' },
                { label: '2025 Lunch/Dinner', value: 'Php 350.00/pax' },
                { label: '2026 AM/PM Snack', value: 'Php 125.00/pax' },
                { label: '2026 Breakfast', value: 'Php 250.00/pax' },
                { label: '2026 Lunch/Dinner', value: 'Php 400.00/pax' }
            ]
        },
        {
            name: "2026 Team Building Packages",
            subtitle: "Future Corporate Rates",
            price: "Starting at P1,250.00/pax",
            description: "2026 Corporate Team Building Package Rates for Daytour and Overnight options, managed by Traverse Outdoor. Minimum of 30 persons.",
            image: "Pics/Activity/FutureRate.jpg",
            tags: ["Corporate", "Package", "2026 Rate"],
            buttonText: "Pre-Book 2026",
            features: [
                { icon: 'fas fa-users', text: 'Min. 30 Persons' },
                { icon: 'fas fa-calendar-alt', text: 'Daytour & Overnight Options' },
                { icon: 'fas fa-handshake', text: 'Includes Facilitators & Meals' },
                { icon: 'fas fa-dollar-sign', text: '+ 12% VAT' }
            ],
            details: [
                { label: 'Corporate Daytour', value: 'P1,250.00/pax' },
                { label: 'Overnight (Multiple Sharing)', value: 'Php 3,100.00/pax' },
                { label: 'Overnight (Triple Sharing)', value: 'Php 3,400.00/pax' },
                { label: 'Overnight (Twin Sharing)', value: 'Php 3,900.00/pax' }
            ]
        }
    ];

    function createPackageCard(pkg) {
        let detailsHtml = '';
        if (pkg.details) {
            detailsHtml = `
                <div class="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm">
                    <p class="font-bold text-teal-700">Detailed Rates:</p>
                    ${pkg.details.map(detail => `
                        <p class="flex justify-between text-gray-700">
                            <span>${detail.label}:</span>
                            <span class="font-semibold">${detail.value}</span>
                        </p>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex flex-wrap gap-2 mb-2">
                        ${pkg.tags.map(tag => `<span class="text-xs font-medium bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">${tag}</span>`).join('')}
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-1">${pkg.name}</h3>
                    <p class="text-sm text-gray-500 mb-3">${pkg.subtitle}</p>
                    <p class="text-2xl font-extrabold text-teal-600 mb-4">${pkg.price}</p>
                    <p class="text-gray-600 text-sm flex-grow mb-4">${pkg.description}</p>
                    
                    <div class="space-y-2 mb-4">
                        ${pkg.features.map(feature => `
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="${feature.icon} text-teal-500 w-4 mr-2"></i>
                                <span>${feature.text}</span>
                            </div>
                        `).join('')}
                    </div>

                    ${detailsHtml}

                    <button onclick='openBookingModal(${JSON.stringify(pkg.name)}, ${JSON.stringify(pkg.subtitle)}, ${JSON.stringify(pkg.price)}, ${JSON.stringify(pkg.description)}, ${JSON.stringify(pkg.details)})' class="mt-auto w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-150">
                        ${pkg.buttonText}
                    </button>
                </div>
            </div>
        `;
    }

    function openBookingModal(name, subtitle, price, description, details) {
        document.getElementById('modalPackageName').textContent = name;
        document.getElementById('modalPackageSubtitle').textContent = subtitle;
        document.getElementById('modalPackagePrice').textContent = price;
        document.getElementById('modalPackageDescription').textContent = description;
        
        const detailsContainer = document.getElementById('modalPackageDetails');
        if (details && details.length > 0) {
            detailsContainer.innerHTML = `
                <p class="font-bold text-teal-700 mb-2">Package Rates:</p>
                ${details.map(d => `
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-700">${d.label}:</span>
                        <span class="font-semibold text-gray-900">${d.value}</span>
                    </div>
                `).join('')}
            `;
        } else {
            detailsContainer.innerHTML = '';
        }
        
        document.getElementById('bookingModal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function openGeneralBookingModal() {
        openBookingModal(
            'Team Building Package',
            'Corporate Group Booking',
            'Contact us for rates',
            'Book your team building event with us. Please fill out the form below and our team will get back to you with a customized quote.',
            []
        );
    }

    function closeBookingModal() {
        document.getElementById('bookingModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('bookingForm').reset();
    }

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('packages-container');
        activitiesData.forEach(pkg => {
            container.insertAdjacentHTML('beforeend', createPackageCard(pkg));
        });

        document.getElementById('closeModal').addEventListener('click', closeBookingModal);
        document.getElementById('cancelBooking').addEventListener('click', closeBookingModal);
        
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Team building inquiry submitted successfully! Our team will contact you within 24 hours to discuss your requirements.');
            closeBookingModal();
        });

        document.getElementById('bookingModal').addEventListener('click', (e) => {
            if (e.target.id === 'bookingModal') closeBookingModal();
        });
    });

    const heroImage = document.getElementById('heroImage');
    const thumbs = document.querySelectorAll('.thumb');
    let currentIndex = 0;
    const duration = 5000;

    function setHeroImage(index) {
        if (!thumbs[index]) return;
        const imgPath = thumbs[index].getAttribute('data-img');
        heroImage.src = imgPath;
        thumbs.forEach(t => t.classList.remove('border-teal-600'));
        thumbs[index].classList.add('border-teal-600');
        currentIndex = index;
    }

    if (thumbs.length > 0) setHeroImage(0);

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => setHeroImage(index));
    });

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % thumbs.length;
        setHeroImage(nextIndex);
    }, duration);

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });