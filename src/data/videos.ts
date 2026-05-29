/**
 * Drop your video files in: public/videos/
 * Optional poster/thumbnail images in: public/videos/posters/
 *
 * Supported formats: .mp4, .webm, .mov
 * Example: save "prize-patrol-surprise.mp4" → reference as "/videos/prize-patrol-surprise.mp4"
 *
 * Each entry needs a title (shown in the list) and caption (shown under the player).
 * Add as many videos as you like — no limit. Use ids like '001', '002', … or any unique string.
 */

export interface LocalVideo {
  id: string;
  title: string;
  /** Short description shown below the video player */
  caption: string;
  /** Path from public folder, e.g. "/videos/my-clip.mp4" */
  src: string;
  /** Optional thumbnail — add JPG/PNG to public/videos/posters/ */
  poster?: string;
}

export const pchVideos: LocalVideo[] = [
  {
    id: '1',
    title: 'Prize Patrol Surprise — Winner Reaction',
    caption:
      'The Prize Patrol arrives at a winner\'s front door with the big check — real surprise, real tears, real joy.',
    src: '/videos/prize-patrol-1.mp4',
    poster: '/videos/posters/prize-patrol-1.jpg',
  },
  {
    id: '2',
    title: 'Big Check Delivery Moment',
    caption:
      'A PCH winner poses with their oversized prize check after applying online and being selected in a random drawing.',
    src: '/videos/prize-patrol-2.mp4',
    poster: '/videos/posters/prize-patrol-2.jpg',
  },
  {
    id: '3',
    title: 'Robert C from Ohio Wins $40,000 & $10,000 a Year for Life',
    caption:
      'Robert Clemente of Willoughby, OH won $40,000 plus $10,000 A Year For Life from Publishers Clearing House. Do you want to become our next big #PCHWinner? Apply now.',
    src: '/videos/prize-patrol-3.mp4',
    poster: '/videos/posters/prize-patrol-3.jpg',
  },

  // ── ADD MORE VIDEOS BELOW ─────────────────────────────────────
  // {
  //   id: '4',
  //   title: 'Your video title',
  //   caption: 'Short description shown under the player.',
  //   src: '/videos/your-clip.mp4',
  //   poster: '/videos/posters/your-clip.jpg',
  // },
];
