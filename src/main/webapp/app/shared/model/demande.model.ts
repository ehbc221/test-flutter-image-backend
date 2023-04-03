export interface IDemande {
  id?: number;
  imageContentType?: string | null;
  image?: string | null;
  photoContentType?: string | null;
  photo?: string | null;
}

export const defaultValue: Readonly<IDemande> = {};
