import { friendlySpaceName, spaceImage } from '../data/spaces'

type Space = {
  spaceName: string,
  uniqueVisitors: number,
  steps: number,
  interactions: number,
  messages: number,
  timeOnlineInMinutes: number
}

type Props = {
  space: Space;
};

export function SpaceCard ({ space }: Props) {
  return (
    <div className='card w-full bg-base-100 shadow-xl' key={space.spaceName}>
      <figure className='bg-black '>
        <img src={spaceImage[space.spaceName] || spaceImage.default} alt={space.spaceName} className='h-40 object-cover' />
      </figure>
      <div className='card-body text-sm'>
        <h2 className='card-title text-sm'>
          {friendlySpaceName[space.spaceName] || space.spaceName}
        </h2>
        <ul>
          <li>🙋 {space.uniqueVisitors || 0}</li>
          <li>👣 {space.steps || 0}</li>
          <li>🤏 {space.interactions || 0}</li>
          <li>💬 {space.messages || 0}</li>
          <li>🕒 {space.timeOnlineInMinutes?.toFixed(0)} min</li>
        </ul>
      </div>
    </div>
  )
}
