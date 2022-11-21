export interface LocationApiResponse {
  info: LocationInfo;
  results: Location[];
}

export interface LocationInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimensions: string;
  residents: string[];
  url: string;
  created: string;
}
