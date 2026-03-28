# Google Search Console Setup Guide
## Shoonya Insurance Brokers - Month 1 Implementation

**Setup Date:** March 28, 2026  
**Status:** Ready for Client Implementation  
**Estimated Setup Time:** 30-45 minutes  

---

## INTRODUCTION

Google Search Console (GSC) is essential for monitoring your website's presence in Google Search. This guide walks you through setup, verification, and initial configuration.

---

## STEP 1: CREATE GOOGLE ACCOUNT

**If you don't have a Google account:**
1. Go to [accounts.google.com/signup](https://accounts.google.com/signup)
2. Enter your email (can be personal or business)
3. Create password
4. Verify phone number
5. Complete setup

**Recommended:** Use business email (info@shoonya.care) for consistency.

---

## STEP 2: ACCESS GOOGLE SEARCH CONSOLE

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Start Now" or sign in with your Google account
3. You'll see the property selection screen

---

## STEP 3: ADD YOUR WEBSITE PROPERTY

### Option A: Add Domain Property (Recommended)

**Benefits:**
- Covers all subdomains (www, non-www, etc.)
- Recommended by Google
- Simpler to manage

**Steps:**
1. In GSC, select "Property type" and choose "Domain"
2. Enter: `shoonya.care` (without https://)
3. Click "Continue"
4. You'll see DNS verification instructions

### Option B: Add URL Prefix Property

**Benefits:**
- More specific control
- Good if you have multiple versions

**Steps:**
1. Select "URL prefix"
2. Enter: `https://shoonya.care/`
3. Click "Continue"
4. Proceed to verification

---

## STEP 4: VERIFY OWNERSHIP

### Verification Method 1: DNS TXT Record (BEST for Domain)

**Why:** Proves you own the domain

**How:**
1. GSC shows a DNS TXT record like: `google-site-verification=abcd1234efgh5678...`
2. Log into your domain registrar (GoDaddy, Namecheap, etc.)
3. Go to DNS settings
4. Add a new TXT record:
   - Type: TXT
   - Name: @ (or leave blank)
   - Value: `google-site-verification=abcd1234efgh5678...`
5. Save changes
6. Return to GSC and click "Verify"
7. **Note:** DNS changes can take 24-48 hours to propagate

### Verification Method 2: HTML File Upload

**How:**
1. GSC provides a verification HTML file: `google1234567890abcd.html`
2. Download the file
3. Upload to your server's root directory: `/public/google1234567890abcd.html`
4. Make sure file is accessible at: `https://shoonya.care/google1234567890abcd.html`
5. Return to GSC and click "Verify"
6. **Timeline:** Immediate

### Verification Method 3: HTML Meta Tag

**How:**
1. GSC provides a meta tag: 
   ```html
   <meta name="google-site-verification" content="abcd1234efgh..." />
   ```
2. Add this to the `<head>` section of your `index.html`:
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8" />
       <meta name="google-site-verification" content="[YOUR-VERIFICATION-CODE]" />
       <!-- Rest of head content -->
     </head>
   ```
3. Upload updated file to server
4. Return to GSC and click "Verify"
5. **Timeline:** 24 hours

### Verification Method 4: Google Analytics

**How:**
1. If you have Google Analytics connected
2. GSC can verify via your Analytics account
3. Click "Use Google Analytics" during verification

**Recommended Sequence:**
1. **Best:** DNS TXT record (if you manage domain)
2. **Second:** HTML file upload
3. **Third:** HTML meta tag
4. **Last:** Google Analytics

---

## STEP 5: INITIAL CONFIGURATION

### 5.1 Submit Sitemap

**After Verification:**
1. In GSC, navigate to "Sitemaps" (left sidebar)
2. Click "New sitemap"
3. Enter: `sitemap.xml`
4. Click "Submit"
5. GSC will crawl the sitemap

**Expected Actions:**
- GSC will discover all URLs in sitemap
- Crawl will begin
- Initial indexing takes 3-7 days

**Monitor:**
- Check "Coverage" report to see indexed pages
- Note any excluded pages (with reasons)

### 5.2 Request Indexing

**To speed up indexing:**
1. Go to "Sitemaps" section
2. Click on your submitted sitemap
3. Note the "Discovered" count (total URLs found)
4. Note the "Indexed" count (pages in Google index)

**Manual URL Inspection:**
1. Go to "URL Inspection" tool (left sidebar)
2. Enter your homepage: `https://shoonya.care/`
3. Click "Request indexing"
4. Repeat for key pages (Cyber Insurance, Health Insurance, etc.)

### 5.3 Monitor Crawl Coverage

**What to Monitor:**
1. **Coverage Report:**
   - Shows indexed vs. not indexed pages
   - Displays errors (if any)
   - Shows excluded pages
   
2. **Indexing Issues to Watch:**
   - 404 errors (pages not found)
   - Server errors (5xx)
   - Robots.txt blocked
   - Access denied

3. **Action if Issues Found:**
   - Fix 404 pages with redirects
   - Fix server errors immediately
   - Review robots.txt if overly restrictive

---

## STEP 6: SETUP ALERTS & NOTIFICATIONS

### Email Notifications

1. Go to **Settings** (left sidebar)
2. Click **Users and permissions**
3. Ensure your email is listed as **Owner**
4. Go back to **Settings** → **Crawl stats**
5. Enable notifications for:
   - Indexing errors
   - Crawl errors
   - Ranking changes (premium)

### Critical Alerts to Monitor

- [ ] **Crawl errors:** Get alert when Google can't crawl
- [ ] **Indexing issues:** Get alert for indexing problems
- [ ] **Manual action warnings:** Alert if Google penalizes
- [ ] **Security issues:** Alert if malware detected

---

## STEP 7: UNDERSTAND KEY REPORTS

### Coverage Report
- **Purpose:** Shows indexed vs. not indexed pages
- **Check:** Weekly initially, then monthly
- **Action:** Fix any excluded or error pages

### Performance Report
- **Purpose:** Shows search impressions, clicks, CTR, position
- **Check:** Weekly to monitor keyword rankings
- **Action:** Identify top performing pages and low performers

### URL Inspection Tool
- **Purpose:** Check if specific URL is indexed
- **Use:** Before and after major changes
- **Benefit:** See exact indexing status and issues

### Mobile Usability Report
- **Purpose:** Shows mobile-friendly issues
- **Check:** Monthly
- **Action:** Ensure site is mobile-responsive

### Coverage Report Details
- **Status:** Shows:
  - Valid pages (indexed)
  - Excluded pages (why?)
  - Error pages (fix immediately)

---

## STEP 8: GOOGLE SEARCH CONSOLE CHECKLIST (First Month)

### Week 1 Checklist
- [ ] Create Google Search Console account
- [ ] Add property (shoonya.care)
- [ ] Verify ownership
- [ ] Submit sitemap.xml
- [ ] Request indexing for homepage

### Week 2 Checklist
- [ ] Check Coverage report
- [ ] Note any errors/excluded pages
- [ ] Fix high-priority pages (404s, server errors)
- [ ] Check URL inspection for key pages
- [ ] Monitor crawl stats

### Week 3 Checklist
- [ ] Review Performance report
- [ ] Check keyword rankings
- [ ] Monitor click-through rate (CTR)
- [ ] Identify underperforming pages
- [ ] Plan optimization for low-CTR pages

### Week 4 Checklist
- [ ] Final month review
- [ ] Consolidate findings
- [ ] Plan next month's optimization
- [ ] Document baseline metrics
- [ ] Create monthly report for client

---

## COMMON GSC TASKS

### Request Index for Specific Page
1. Go to **URL Inspection** tool
2. Paste URL: `https://shoonya.care/#cyber-insurance`
3. Click **Request indexing**
4. Google will re-crawl that page

### Remove Page from Index
1. Go to **Coverage** report
2. Find the page
3. Click on it
4. Click **Request removal** (if you want to remove it)
5. Options:
   - Temporary removal (6 months)
   - Permanent removal (delete robots.txt)

### View Crawl Statistics
1. Go to **Settings** (left sidebar)
2. Click **Crawl statistics**
3. See:
   - Pages crawled per day
   - Kilobytes downloaded
   - Time spent crawling
   - Crawl requests per second

### Submit XML Sitemap
1. Go to **Sitemaps**
2. Click **New sitemap**
3. Enter: `sitemap.xml` or `https://shoonya.care/sitemap.xml`
4. Click **Submit**
5. Monitor indexed count in reporting

---

## OPTIMIZING FOR GOOGLE SEARCH CONSOLE

### Best Practices

1. **Sitemap Management:**
   - Keep sitemap.xml updated
   - Add new pages within 24 hours
   - Remove permanently deleted pages
   - Resubmit monthly

2. **Mobile Optimization:**
   - Ensure mobile-responsive design
   - Test with mobile-friendly test tool
   - Fix mobile usability issues

3. **Core Web Vitals:**
   - Monitor Largest Contentful Paint (LCP)
   - Monitor Cumulative Layout Shift (CLS)
   - Monitor First Input Delay (FID)
   - Improve if issues found

4. **Structured Data:**
   - Add schema markup for:
     - Organization (Company info)
     - LocalBusiness (office locations)
     - Article (blog posts)
     - BreadcrumbList (navigation)
   - Validate with Google's structured data tester

5. **Internal Links:**
   - Use descriptive anchor text
   - Link to important pages from homepage
   - Create internal linking architecture
   - Helps Google discover all content

6. **Page Speed:**
   - Optimize image sizes
   - Minimize CSS/JavaScript
   - Use caching
   - Check with PageSpeed Insights

---

## ADVANCED GSC FEATURES

### Setup Search Appearance (Enhancements)

1. Go to **Search appearance** section
2. Configure:
   - **Breadcrumbs:** Shows navigation in SERP
   - **Logo:** Brand logo in SERP
   - **Corporate contacts:** Displays company info
   - **Sitelinks:** Quick links in search results

### Monitor Rankings with Performance Report

1. Go to **Performance** report
2. Filter by:
   - **Queries:** See search terms
   - **Pages:** See top performing pages
   - **Countries:** Monitor geo performance
   - **Devices:** Mobile vs. desktop performance

**Key Metrics:**
- **Impressions:** How many times shown in search
- **Clicks:** Actual clicks from search
- **CTR:** Click-through rate (clicks/impressions)
- **Avg. Position:** Average ranking position

---

## LINKING WITH OTHER TOOLS

### Connect Google Analytics
1. Go to **Settings**
2. Click **User and permissions**
3. Find **Google Analytics**
4. Link to your GA account
5. Enables advanced insights

### Connect Bing Webmaster Tools
1. Create account at [www.bing.com/webmasters](https://www.bing.com/webmasters)
2. Add property
3. Verify through GSC (one-click if verified in GSC)
4. Get insights for Bing/Yahoo searches

---

## MONTH 1 GSC GOALS

By end of Month 1, you should have:

✓ Google Search Console account created  
✓ Website property added and verified  
✓ Sitemap submitted with 40+ pages  
✓ Homepage request for indexing  
✓ Coverage report reviewed  
✓ Key pages analyzed for errors  
✓ Email notifications enabled  
✓ Mobile usability checked  
✓ Initial performance data collected  
✓ Monthly GSC report created  

---

## TROUBLESHOOTING

### Verification Fails
- **DNS:** Wait 48 hours for DNS propagation
- **Robots.txt:** Ensure robots.txt doesn't block verification
- **Server:** Check server accessibility

### Pages Won't Index
- **Robots.txt:** Make sure page isn't blocked
- **Noindex tag:** Remove if added by mistake
- **Canonicals:** Check alternate canonicals
- **Server errors:** Ensure page loads without 500 errors
- **Crawl:** Request re-crawl via URL Inspection

### Crawl Errors
- **404s:** Find and fix broken links
- **Server errors:** Contact hosting provider
- **Robots.txt blocked:** Review robots.txt settings

---

## RECOMMENDED MONTHLY REVIEW

**Every Month, Check:**
1. **Coverage:** Are new pages indexed?
2. **Performance:** Which keywords drive traffic?
3. **URL Inspection:** Any crawl issues?
4. **Mobile Usability:** Are there new issues?
5. **Core Web Vitals:** Are metrics improving?
6. **Indexing:** Is Google aware of all pages?

---

## RESOURCES

- **Google Search Console Help:** [support.google.com/webmasters](https://support.google.com/webmasters)
- **Search Central Blog:** [searchengineland.com](https://searchengineland.com)
- **Structured Data Testing:** [schema.org](https://schema.org)
- **PageSpeed Insights:** [pagespeed.web.dev](https://pagespeed.web.dev)
- **Mobile-Friendly Test:** [google.com/mobile-friendly](https://google.com/mobile-friendly)

---

**Document Version:** 1.0  
**Last Updated:** March 28, 2026  
**Status:** Ready for Client Implementation  
**Support:** Contact for GSC setup assistance
