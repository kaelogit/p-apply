export type WinnerPhotoFolder = 'checks' | 'testimonials';

/**
 * Build path for winner photos: 001-00.jpg, 001-01.jpg, …
 * Folder: public/winners/checks/ or public/winners/testimonials/
 */
export function winnerImagePath(
  folder: WinnerPhotoFolder,
  winnerId: string,
  index: number
): string {
  const id = winnerId.padStart(3, '0');
  const idx = String(index).padStart(2, '0');
  return `/winners/${folder}/${id}-${idx}.jpg`;
}

/** All image paths for one winner */
export function getWinnerImages(
  folder: WinnerPhotoFolder,
  winnerId: string,
  options?: {
    /** Explicit list, e.g. ['/winners/checks/001-00.jpg', '001-01.jpg'] */
    images?: string[];
    /** Number of photos (001-00 … 001-(n-1)). Default 1 */
    imageCount?: number;
  }
): string[] {
  if (options?.images?.length) {
    return options.images.map((img) =>
      img.startsWith('/') ? img : `/winners/${folder}/${img}`
    );
  }
  const count = options?.imageCount ?? 1;
  return Array.from({ length: count }, (_, i) => winnerImagePath(folder, winnerId, i));
}
