// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
//   const data = await client.sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

//   return data.rows; // Returns the rows from the query result.
// }

// export async function GET() {
//   try {
//     // Call the function to list invoices and return the data.
//     const invoices = await listInvoices();
//     return Response.json({ invoices });
//   } catch (error) {
//     // Handle any errors and return a 500 status code with the error details.
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }
