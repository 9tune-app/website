import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
//import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";  
import Link from "next/link";

export default async function Home() {
	const supabase = createServerComponentClient({ cookies });
//	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: musics, error } = await supabase.from("music").select("*");
	console.log("aaa");
	console.log( musics );
	console.log( error );
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<div className="w-full max-w-3xl mx-auto my-16 px-2">
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className="text-right">Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
					</TableRow>
				</TableBody>
			</Table>

				{musics?.map((music)=>(
					<Link href={`/${music.id}`} key={music.id}>
						<Card className="my-2">
							<CardHeader>
								<CardTitle>{music.title}</CardTitle>
								<CardDescription>{music.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<p>Card Content</p>
							</CardContent>
							<CardFooter>
								<p>Card Footer</p>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
		</main>
	);
}
