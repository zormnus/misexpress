export default function imageLoader({
	src,
	width,
	quality,
}: {
	src: string
	width: number
	quality?: number
}) {
	return `http://mis-express.com/${src}`
}
