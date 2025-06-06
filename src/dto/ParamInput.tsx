export interface InititalPrompt {
    role: string;
    content: string;
 }
 
 export interface MCPTools {
   name?: string;
   type: string;
   server_url?: string;
 }

 export interface CacheConfig {
   type: 'exact' | 'distance',
   expiration_time?: number,
   min_similarity?: number
 }