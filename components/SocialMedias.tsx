import Instagram from './icons/Instagram';
import Weibo from './icons/Weibo';
import XiaoHongShu from './icons/XiaoHongShu';

export default function SocialMedias() {
	return (
		<div className="flex items-center justify-center space-x-[10px]">
			<a
				href="https://www.instagram.com/petrichorjewelry_official"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="block h-5 w-5">
					<Instagram />
				</span>
			</a>
			<a
				href="https://weibo.com/wangjewelry"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="block h-5 w-5">
					<Weibo />
				</span>
			</a>
			<a
				href="https://www.xiaohongshu.com/user/profile/61afbc9900000000100099c8"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="block h-4 w-4">
					<XiaoHongShu />
				</span>
			</a>
		</div>
	);
}
