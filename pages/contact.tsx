import Title from '../components/Title';
import Image from 'next/image';

export default function Contact() {
	return (
		<>
			<Title>Contact | PETRICHOR Official</Title>
			<div className="mb-20 flex flex-col gap-4 lg:mb-0 lg:w-3/5 lg:flex-row lg:justify-center">
				<div className="order-2 text-xs leading-5 lg:order-1 lg:w-1/3">
					<div className="mt-4 space-y-4 lg:mt-[100px]">
						<p>
							<b>
								工作日及周末 <time dateTime="10:00">10:00</time>-
								<time dateTime="22:00">22:00</time>
							</b>
							<br />
							<span>（法定节假日期间以具体安排为准）</span>
						</p>
						<p>
							<b>电子邮箱</b>
							<br />
							<a
								className="underline underline-offset-2"
								href="mailto:service@petrichor.jewelry"
							>
								SERVICE@PETRICHOR.JEWELRY
							</a>
						</p>
						<p>
							<b>地址</b>
							<br />
							<span>中国，广东深圳</span>
						</p>
					</div>
				</div>
				<figure className="relative order-1 aspect-square lg:order-2 lg:w-2/3">
					<Image src="/images/studio.jpg" layout="fill" alt="studio" />
				</figure>
			</div>
		</>
	);
}
