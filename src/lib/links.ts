// Navigation Sitemap

export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
	'/overview': [
		{
			title: 'Overview',
			list: [
				{ 
                    href: '/dash/sales', 
                    label: 'Sales', 
                    keywords: 'sales, top, services, target' 
                },
				{ 
                    href: '/dash/top', 
                    label: 'Top', 
                    keywords: 'sales, top, services, target' 
                }
			]
		},
		{
			title: 'Compare',
			list: [
				{ 
                    href: '/dash/compare', 
                    label: 'Compare', 
                    keywords: 'sales, top, services, target' 
                },
			]
		}
	],
	'/schedules': [
		{
			title: 'Appointments',
			list: [
				{
					href: '/dash/appointments',
					label: 'Upcoming',
					keywords: 'today, appointment, booking, order'
				},
				{
					href: '/dash/confirmations',
					label: 'Need confirmation',
					keywords: 'confirmation, appointment, booking, order, confirm'
				},
				{
					href: '/dash/due-checkout',
					label: 'Due to checkout',
					keywords: 'checkout, due, appointment, booking, order'
				}
			]
		},
		{
			title: 'Todos',
			list: [
				{
					href: '/dash/todos',
					label: 'Todos',
					keywords: 'todo, appointment, booking, order, kanban'
				},
            
			]
		},
		
	],
	'/users': [
        {
			title: 'Services',
			list: [
				{
					href: '/dash/services',
					label: 'Services',
					keywords: 'categories, appointment, booking, services'
				},
                {
					href: '/dash/categories',
					label: 'Categories',
					keywords: 'categories, appointment, booking, services'
				}

			]
		},
		{
			title: 'Customer',
			list: [
				{
					href: '/dash/customers',
					label: 'Upcomming',
					keywords: 'todo, appointment, booking, order, kanban'
				},
                {
					href: '/dash/customers-history',
					label: 'History',
					keywords: 'customers, appointment, booking, order'
				}

			]
		},
		{
			title: 'Employee',
			list: [
				{
					href: '/dash/employee-top',
					label: 'Top',
					keywords: 'employee, list, rating, reviews,top'
				},
                {
					href: '/dash/employee-list',
					label: 'List',
					keywords: 'employee, list, rating, reviews'
				},
                {
					href: '/dash/employee-edit',
					label: 'Edit',
					keywords: 'customers, appointment, booking, order'
				}
			]
		},
	],
	'/accountant': [
		{
			title: 'Invoices',
			list: [
                {
					href: '/dash/invoices',
					label: 'Invoices',
					keywords: 'Invoices, appointment, booking, order'
				},
				{
					href: '/dash/payments',
					label: 'Payments',
					keywords: 'Payments, appointment, booking, order'
				},
                {
					href: '/dash/reports',
					label: 'Reports',
					keywords: 'Reports, appointment, booking, order'
				}
			]
		}
	],
    '/messages': [
		{
			title: 'Online Chat',
			list: [
                {
					href: '/dash/chat',
					label: 'Room',
					keywords: 'chat, group chat'
				}
				
			]
		},
        {
			title: 'Text messages',
			list: [
                {
					href: '/dash/sms',
					label: 'SMS',
					keywords: 'sms, text message'
				}
				
			]
		},
        {
			title: 'Email',
			list: [
                {
					href: '/dash/email',
					label: 'Email',
					keywords: 'email, mail box'
				}
				
			]
		}
	]
};