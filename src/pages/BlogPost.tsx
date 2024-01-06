import StaticNoise from '../components/StaticNoise';

type BlogPostProps = {
  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
};

const BlogPost = ({ isHovered, setIsHovered }: BlogPostProps) => {
  return (
    <div className='grid place-items-center h-full px-6'>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className='p-6 z-10 bg-pure-white rounded-[20px] ring-1 ring-black max-w-96 shadow-blogShadow relative group cursor-pointer hover:shadow-blogShadowHover transition-all'
      >
        <div className='overflow-hidden rounded-[10px] mb-6'>
          <img
            className='h-[200px] w-full object-cover'
            src='/images/illustration-article.svg'
            alt='abstract arty background picture in the color of black, yellow and white'
          />
        </div>
        <div className='bg-yellow px-3 h-[29px] inline-flex rounded mb-3 flex-col items-center justify-center'>
          <p className='font-extrabold text-xs sm:text-sm'>Learning</p>
        </div>
        <p className='text-xs sm:text-sm font-medium mb-3 leading-normal h-[21px]'>
          Published 21 Dec 2023
        </p>
        <div className='relative'>
          <h1 className='text-xl sm:text-2xl font-extrabold leading-normal mb-3 h-9 before:absolute before:w-full before:h-1 before:rounded before:bg-black before:bottom-0 before:left-0 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 before:group-hover:origin-left before:group-hover:scale-100'>
            HTML & CSS foundations
          </h1>
        </div>
        <p className='text-grey leading-normal font-medium mb-6 text-sm sm:text-base'>
          These languages are the backbone of every website, defining structure, content, and
          presentation.
        </p>
        <div className='flex items-center gap-3'>
          <img className='w-8 h-8' src='/images/image-avatar.webp' alt='' />
          <p className='font-extrabold text-sm leading-normal'>Greg Hooper</p>
        </div>
      </div>
      {isHovered && <StaticNoise />}
    </div>
  );
};

export default BlogPost;
