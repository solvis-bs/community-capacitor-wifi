declare module '@capacitor/core/dist/esm/core-plugin-definitions' {
  interface PluginRegistry {
    Wifi: WifiPlugin;
  }
}

export interface WifiPlugin {
  getIP(): Promise<{ ip: string | null }>;
  getSSID(): Promise<{ ssid: string | null }>;
  connect(options: { ssid: string, password?: string }): Promise<{ ssid: string | null }>;
  connectPrefix(options: { ssid: string, password?: string }): Promise<{ ssid: string | null }>;
  disconnect(options: { ssid: string }): Promise<void>;

}
