    <!-- JavaScript -->
    <script>
        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeToggleMobile = document.getElementById('themeToggleMobile');
        const html = document.documentElement;
        
        // Check for saved theme preference or use system preference
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        
        // Toggle theme function
        function toggleTheme() {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
        
        themeToggle.addEventListener('click', toggleTheme);
        themeToggleMobile.addEventListener('click', toggleTheme);
        
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Profile dropdown
        const profileDropdown = document.getElementById('profileDropdown');
        const profileMenu = document.getElementById('profileMenu');
        
        profileDropdown.addEventListener('click', () => {
            profileMenu.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!profileDropdown.contains(event.target)) {
                profileMenu.classList.add('hidden');
            }
        });
        
        // Payment option toggle
        const fullPaymentBtn = document.getElementById('fullPaymentBtn');
        const installmentBtn = document.getElementById('installmentBtn');
        const fullPaymentSection = document.getElementById('fullPaymentSection');
        const installmentSection = document.getElementById('installmentSection');
        
        fullPaymentBtn.addEventListener('click', () => {
            fullPaymentBtn.classList.add('bg-primary', 'text-white');
            fullPaymentBtn.classList.remove('bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-700', 'dark:text-gray-300');
            
            installmentBtn.classList.remove('bg-primary', 'text-white');
            installmentBtn.classList.add('bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-700', 'dark:text-gray-300');
            
            fullPaymentSection.classList.remove('hidden');
            installmentSection.classList.add('hidden');
        });
        
        installmentBtn.addEventListener('click', () => {
            installmentBtn.classList.add('bg-primary', 'text-white');
            installmentBtn.classList.remove('bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-700', 'dark:text-gray-300');
            
            fullPaymentBtn.classList.remove('bg-primary', 'text-white');
            fullPaymentBtn.classList.add('bg-white', 'dark:bg-gray-700', 'border', 'border-gray-300', 'dark:border-gray-600', 'text-gray-700', 'dark:text-gray-300');
            
            fullPaymentSection.classList.add('hidden');
            installmentSection.classList.remove('hidden');
        });
        
        // Razorpay integration
        document.getElementById('rzp-button').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the amount from input
            const amount = document.getElementById('amount').value;
            
            // Create options object for Razorpay
            const options = {
                key: "rzp_test_1DP5mmOlF5G5ag", // Enter the Test API Key
                amount: amount * 100, // Amount in paisa
                currency: "INR",
                name: "Akademix",
                description: "Fee Payment",
                image: "https://your-logo-url.png",
                handler: function (response) {
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                    // Here you would typically send the payment ID to your server for verification
                },
                prefill: {
                    name: "John Doe",
                    email: "john.doe@example.com",
                    contact: "9876543210"
                },
                notes: {
                    studentId: "AKD12345",
                    semester: "4"
                },
                theme: {
                    color: "#FF6B00"
                }
            };
            
            const rzp = new Razorpay(options);
            rzp.open();
        });
        
        // Apply for installment plan
        document.getElementById('apply-installment').addEventListener('click', function() {
            const selectedPlan = document.querySelector('input[name="installmentPlan"]:checked');
            
            if (selectedPlan) {
                alert("You have selected " + selectedPlan.id + ". Our finance team will contact you shortly.");
            } else {
                alert("Please select an installment plan.");
            }
        });
        
    </script>
    
