import {FeedResult} from "../components/result-box";
import {API_HEADERS, HOST} from "../../forms/util/api";
import { Downloads } from "../../../../../behind/entitiy/downloads";
import { ITorrent_Transportable } from "../../../../../behind/modules/torrent";

export async function submitTorrent(torrent: FeedResult) {
  const response = await fetch(`${HOST}/torrents/new`, {
    ...API_HEADERS,
    method: "POST",
    body: JSON.stringify(torrent, null, 2)
  });

  return response.json();
}

export async function getRunningTorrents(): Promise<Array<Downloads>> {
  const response = await fetch(`${HOST}/torrents/running`, {
    ...API_HEADERS,
    method: "GET"
  });

  return response.json();
}

export async function pauseTorrent(torrent: ITorrent_Transportable): Promise<void> {
  const response = await fetch(`${HOST}/torrents/pause`, {
    ...API_HEADERS,
    method: "POST",
    body: JSON.stringify(torrent, null, 2)
  });
}

export async function serveFile(infoHash: string, index: number) {
  const response = await fetch(`${HOST}/torrents/view/${infoHash}/${index}`, API_HEADERS);
  return response.json();
}