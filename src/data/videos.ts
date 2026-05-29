/**
 * Drop your video files in: public/videos/
 * Optional poster/thumbnail images in: public/videos/posters/
 *
 * Supported formats: .mp4, .webm, .mov
 * Example: save "prize-patrol-surprise.mp4" → reference as "/videos/prize-patrol-surprise.mp4"
 */

export interface LocalVideo {
  id: string;
  title: string;
  /** Path from public folder, e.g. "/videos/my-clip.mp4" */
  src: string;
  /** Optional thumbnail — add JPG/PNG to public/videos/posters/ */
  poster?: string;
}

export const pchVideos: LocalVideo[] = [
  {
    id: '1',
    title: 'Prize Patrol Surprise — Winner Reaction',
    src: '/videos/prize-patrol-1.mp4',
    poster: '/videos/posters/prize-patrol-1.jpg',
  },
  {
    id: '2',
    title: 'Big Check Delivery Moment',
    src: '/videos/big-check-delivery.mp4',
    poster: '/videos/posters/big-check-delivery.jpg',
  },
  {
    id: '3',
    title: 'Winner Thank You Message',
    src: '/videos/winner-thank-you.mp4',
    poster: '/videos/posters/winner-thank-you.jpg',
  },
];
