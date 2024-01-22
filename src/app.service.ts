import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}
  getHello(): string {
    this.logger.log('[AppService] [getHello] : Hello World')
    return 'Hello World!';
  }

  getResponse(): any {
    this.logger.log('[AppService] [getResponse] : generating random payload')
    return { randomText: this.generateRandomResponse() };
  }

  generateRandomResponse(): string {
    const responseSizeInBytes = 5 * 1024 * 1024; // 5 MB
    const chunkSizeInBytes = 1024; // 1 KB
  
    const numChunks = Math.ceil(responseSizeInBytes / chunkSizeInBytes);
  
    let response = '';
  
    for (let i = 0; i < numChunks; i++) {
      const chunk = this.generateRandomChunk(chunkSizeInBytes);
      response += chunk;
    }
  
    return response;
  }
  
  generateRandomChunk(chunkSize: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const numCharacters = characters.length;
  
    let chunk = '';
  
    for (let i = 0; i < chunkSize; i++) {
      const randomIndex = Math.floor(Math.random() * numCharacters);
      chunk += characters[randomIndex];
    }
  
    return chunk;
  }
}
