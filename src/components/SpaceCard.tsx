import { friendlySpaceName } from '../data/spaces'

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
    <div className='card w-full border border-black bg-base-100 shadow-xl' key={space.spaceName}>

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
