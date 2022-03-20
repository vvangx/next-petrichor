export default function Demo() {
	return (
		<div className="flex h-[400px] flex-col justify-center border-2">
			<div className="flex justify-center gap-2 bg-pink-200 py-2">
				<div className="aspect-square w-[200px] self-center bg-blue-300"></div>
				<div className="aspect-[2/3] w-[200px] bg-green-300"></div>
			</div>
		</div>
	);
}
