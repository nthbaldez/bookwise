import { twMerge } from 'tailwind-merge'

interface RatingStarProps {
  rating: number
  className?: string
}

export default function RatingStar({ rating, className }: RatingStarProps) {
  return (
    <div className={className}>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className={twMerge(
              rating >= star ? 'text-purple-100' : 'text-gray-300 p-0 m-0',
              'text-[24px] cursor-pointer',
              'inline-block',
            )}
            style={{
              cursor: 'pointer',
              fontSize: `24px`,
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
  )
}
