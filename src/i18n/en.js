export default {
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            new_customers: 'New Customers',
            pending_orders: 'Pending Orders',
            order: {
                items: 'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to Interviewer Tracker',
                subtitle: 'This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it\'s local to your computer, and will reset each time you reload.',
            },
        },
    },
    resources: {
      reviews: {
          name: 'Interviewer |||| Interviewers',
          fields: {
              customer_id: 'Customer',
              command_id: 'Order',
              product_id: 'Product',
              date_gte: 'Posted since',
              date_lte: 'Posted before',
              date: 'Date',
              comment: 'Comment',
              rating: 'Rating',
          },
          action: {
              accept: 'Accept',
              reject: 'Reject',
          },
          notification: {
              approved_success: 'Review approved',
              approved_error: 'Error: Review not approved',
              rejected_success: 'Review rejected',
              rejected_error: 'Error: Review not rejected',
          },
      },

      commands: {
          name: 'Schedule Interview',
          fields: {
              basket: {
                  delivery: 'Delivery',
                  reference: 'Reference',
                  quantity: 'Quantity',
                  sum: 'Sum',
                  tax_rate: 'Tax Rate',
                  total: 'Total',
                  unit_price: 'Unit Price',
              },
              customer_id: 'Customer',
              date_gte: 'Passed Since',
              date_lte: 'Passed Before',
              total_gte: 'Min amount',
          },
      },
      
        customers: {
            name: 'Canditate |||| Canditates',
            fields: {
                commands: 'Orders',
                groups: 'Segments',
                last_seen_gte: 'Visited Since',
                name: 'Name',
            },
            tabs: {
                identity: 'Identity',
                address: 'Address',
                orders: 'Orders',
                reviews: 'Reviews',
                stats: 'Stats',
            },
            page: {
                delete: 'Delete Customer',
            },

        },
    },
};
