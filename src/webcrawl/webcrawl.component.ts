import { Component } from '@angular/core';
import {ScraperService} from './crawling.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-webcrawl',
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
  ],
  templateUrl: './webcrawl.component.html',
  standalone: true,
  styleUrl: './webcrawl.component.css'
})
export class WebcrawlComponent {
  url: string = ''; // URL entered by the user
  headingDescriptions: { heading: string; content: string }[] = []; // Store extracted data
  errorMessage: string = ''; // Error message for user feedback

  constructor(private scraperService: ScraperService) {}

  // Crawl the website for headings and their descriptions
  async crawlWebsite() {
    this.errorMessage = ''; // Reset error message
    this.headingDescriptions = []; // Reset previous results

    if (!this.url || !this.url.startsWith('http')) {
      this.errorMessage = 'Please enter a valid URL starting with http:// or https://.';
      return;
    }

    try {
      const html = await this.scraperService.fetchWebsiteContent(this.url);
      this.headingDescriptions = this.scraperService.extractHeadingDescriptions(html);

      if (this.headingDescriptions.length === 0) {
        this.errorMessage = 'No headings or descriptions found on the website.';
      }
    } catch (error) {
      console.error('Error while crawling the website:', error);
      this.errorMessage = 'Failed to crawl the website. Please check the URL or try again later.';
    }
  }
}
