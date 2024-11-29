import { Injectable } from '@angular/core';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable({
  providedIn: 'root',
})
export class ScraperService {
  constructor() {}

  // Fetch website content
  async fetchWebsiteContent(url: string): Promise<string> {
    try {
      const response = await axios.get(url);
      return response.data; // Return raw HTML content
    } catch (error) {
      console.error('Error fetching website content:', error);
      throw error;
    }
  }

  // Extract headings and their descriptions
  extractHeadingDescriptions(html: string): { heading: string; content: string }[] {
    const $ = cheerio.load(html);
    const results: { heading: string; content: string }[] = [];

    $('h1, h2, h3, h4, h5, h6').each((_, element) => {
      const heading = $(element).text().trim();
      const nextElement = $(element).next();
      const content = nextElement.text().trim() || 'No content available.';
      results.push({ heading, content });
    });

    return results;
  }
}
