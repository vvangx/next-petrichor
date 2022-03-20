import Image from 'next/image';
import Title from '../components/Title';

export default function About() {
	return (
		<>
			<Title>About | PETRICHOR Official</Title>
			<div className="my-20 lg:my-0 lg:flex lg:w-3/5 lg:flex-row lg:items-center">
				<div className="lg:flex-1">
					<div className="mx-auto w-44 lg:w-full">
						<figure className="relative aspect-[2/3]">
							<Image
								src="/images/designer.jpg"
								alt="designer"
								layout="fill"
								objectFit="contain"
							/>
						</figure>
					</div>
				</div>
				<div className="mt-20 lg:mt-0 lg:flex-1">
					<div className="bg-white px-2 text-xs leading-6 lg:text-right">
						<p className="font-semibold">PETRICHOR</p>
						<p className="mb-3">无声而有力，是更为隐性的自我表达</p>
						<p>成立于 2015 年，由独立珠宝首饰设计师创建</p>
						<p>秉承“KISS” 原则，保持简单</p>
						<p>从生活中汲取灵感，同时融入不过分夸张的元素</p>
						<p>呈现独特、有趣、优雅的极简风格</p>
						<p>主张自在、随性、纯粹的生活态度</p>
						<p>去感知，去发现</p>
					</div>
				</div>
			</div>
		</>
	);
}
