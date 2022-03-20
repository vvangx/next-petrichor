import Image from 'next/image';
import Title from '../components/Title';
import Weibo from '../components/icons/Weibo';
import Instagram from '../components/icons/Instagram';
import XiaoHongShu from '../components/icons/XiaoHongShu';

export default function Home() {
	return (
		<>
			<Title>PETRICHOR Official</Title>
			<div className="flex flex-col gap-4 lg:w-3/5 lg:flex-row lg:gap-[10px]">
				<section className="lg:flex-1">
					<video autoPlay muted playsInline loop className="aspect-[3/4]">
						<source src="/videos/0.webm" type="video/webm" />
						<source src="/videos/0.mp4" type="video/mp4" />
					</video>
				</section>
				<section className="lg:flex-1">
					<div className="relative aspect-[2/3] lg:aspect-[3/4]">
						<Image
							src="/images/0.jpg"
							alt="a model"
							layout="fill"
							objectFit="cover"
							priority
						/>
					</div>
				</section>
			</div>
			<div className="mt-60 bg-white lg:fixed lg:bottom-[30px] lg:right-5 lg:z-50 lg:mt-0">
				<div className="flex items-center justify-center space-x-[10px]">
					<a
						className="h-5 w-5"
						href="https://www.instagram.com/petrichorjewelry_official"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Instagram />
					</a>
					<a
						className="h-5 w-5"
						href="https://weibo.com/wangjewelry"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Weibo />
					</a>
					<a
						className="h-4 w-4"
						href="https://www.xiaohongshu.com/user/profile/61afbc9900000000100099c8"
						target="_blank"
						rel="noopener noreferrer"
					>
						<XiaoHongShu />
					</a>
				</div>
			</div>
		</>
	);
}
