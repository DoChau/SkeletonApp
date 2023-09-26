// Navigation Sitemap

export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
	'/overview': [
		{
			title: 'Overview',
			list: [
				{ 
                    href: '/dash/sale', 
                    label: 'Sale', 
                    keywords: 'sale, top, services, target' 
                },
				{ 
                    href: '/dash/top', 
                    label: 'Top', 
                    keywords: 'sale, top, services, target' 
                }
			]
		},
		{
			title: 'Compare',
			list: [
				{ 
                    href: '/dash/compare', 
                    label: 'Compare', 
                    keywords: 'sale, top, service, target' 
                },
			]
		}
	],
	'/schedule': [
		{
			title: 'Appointment',
			list: [
				{
					href: '/dash/appointment',
					label: 'Upcoming',
					keywords: 'today, appointment, booking, order'
				},
				{
					href: '/dash/confirmation',
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
			title: 'Todo',
			list: [
				{
					href: '/dash/todo',
					label: 'Todo',
					keywords: 'todo, appointment, booking, order, kanban'
				},
            
			]
		},
		
	],
	'/user': [
        {
			title: 'Service',
			list: [
				{
					href: '/dash/service',
					label: 'Service',
					keywords: 'category, appointment, booking, service'
				},
                {
					href: '/dash/category',
					label: 'Category',
					keywords: 'Category, appointment, booking, service'
				}

			]
		},
		{
			title: 'Customer',
			list: [
				{
					href: '/dash/customer',
					label: 'Upcomming',
					keywords: 'todo, appointment, booking, order, kanban'
				},
                {
					href: '/dash/customer-history',
					label: 'History',
					keywords: 'customer, appointment, booking, order'
				}

			]
		},
		{
			title: 'Employee',
			list: [
				{
					href: '/dash/employee-top',
					label: 'Top',
					keywords: 'employee, list, rating, review,top'
				},
                {
					href: '/dash/employee-list',
					label: 'List',
					keywords: 'employee, list, rating, review'
				},
                {
					href: '/dash/employee-edit',
					label: 'Edit',
					keywords: 'customer, appointment, booking, order'
				}
			]
		},
	],
	'/accountant': [
		{
			title: 'Invoice',
			list: [
                {
					href: '/dash/invoice',
					label: 'Invoice',
					keywords: 'Invoice, appointment, booking, order'
				},
				{
					href: '/dash/payment',
					label: 'Payment',
					keywords: ', appointment, booking, order'
				}
			]
		},
		{
			title: 'Report',
			list: [
                {
					href: '/dash/report',
					label: 'Report',
					keywords: 'Report, appointment, booking, order'
				}
			]
		}
	],
    '/message': [
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