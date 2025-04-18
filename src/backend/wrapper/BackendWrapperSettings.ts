export interface BackendWrapperSettings {
	executable: string;
    recipient: string;

    trustModelAlways: boolean;
    compression: boolean;
    cache: boolean;
    showDecryptModal: boolean;
}