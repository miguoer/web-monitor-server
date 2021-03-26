import MonitorData from "models/MonitorData";

export interface IMonitor {
  handleDataUpload(data: MonitorData): string;
}
