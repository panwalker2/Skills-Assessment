# JLB Skills Assessment
# taken by Pan Walker

Roadblocks
----------
- Setting this up on a personal windows machine running Windows 7, had to install node.js/npm and gulp from scratch.
- Installing gulp gave severe warnings, chose to install using "npm install gulp@4.0.0". Localhost:3000 wouldn't load after following instructions.
- Researched, realized this was for a v3 gulp, uninstalled gulp 4 and installed gulp 3 ignoring severe warnings. Localhost:3000 runs fine after that.
- Hated trying to look at assets in Windows Photo Viewer, downloaded trial version of Photoshop CC successfully.
- Had no way of testing on all required browsers, started a free trial of BrowserStack, but it limited what I could test on and I ran out of time on the free trial as it was less than an hour, it seemed. So this hasn't been tested in Safari at 1920px, for example, among others, and the randomizing of the hero hasn't been tested cross-browser at all.
- Had to create a personal github account to download and fork and push changes back.
- SCSS. Took me a minute to realize this was in straight SASS and not SCSS (SASS v3). Is there a reason why SCSS isn't used? Didn't want to veer from example code in SASS.
- JQuery. Wasn't loaded as part of project. Tried loading it via npm but that seemed not to take, perhaps because I'm on Windows. Ended up manually adding jquery in the head. Knew it was okay to use due to example code.

Thoughts
--------
- Responsiveness. As is, at 1920px, this isn't that difficult to implement. But the mockup is VERY difficult to intuit what the designer might want implemented at smaller browser widths. I went back and forth over a lot of options, before finally just settling for what I have. It's very responsive, though I'm not completely happy with it at all widths.
- Fluid text sizing. Had to research the formula to get what I wanted done implemented, then had to modify the code to work in a SASS mixin instead of an SCSS mixin. Very happy with result, though.
- Image size. Chose to reduce image sizes on all images, via Photoshop. Left the originals in the project, for comparison.
- Transparent watermark. Chose to save a transparent watermark as a png as it wasn't super easy to implement the standard watermark at a high transparency across all browsers.
- Video. There was no video specified. Originally I had a blank image that loaded the video on click, but chose not to use it. Chose a video from JLB after receiving input on it.
- Lorem Ipsum. Manually typed in text, as the generators I found online randomized it.
- Animation. Chose simple stuff. Was adding and removing the field to hide/show elements, but that caused (I think) some endless loops when testing in Browserstack, so I ended up with one-time animation unless the screen is resized.

Concerns
--------
- Time spent. I wonder how long this would have taken me if I had sat down at a fully-loaded dev machine and had uninterrupted time. My estimate for billable time spent is between 6 and 16 hours, but a lot of that is settup up Photoshop and Browserstack and Github and installing npm/gulp and having to continually redo work SCSS code as SASS (semi-colons, brackets, lot's of deleting as I go), and a LOT of thought process behind how to make it responsive... which would have been answered quickly if I could have spoken to the designer. I was, however, interrupted frequently when I did sit down to work on this, and only had limited windows of time to do so, hence the wondering about how long it would take if I sat down at JLB on a Mac and tried something similar in one shot. I'm assuming 4-8 hours depending on access to designer for questions. I did spend some time re-learning the flexbox system, and feel much more proficient with it now, at least.
- Responsiveness. I hope that the lack of obvious responsiveness was part of the challenge. It was a bear to figure out something that seemed to work / flow. And it seemed ridiculous not to make it responsive.
- Design. I still wonder what the designer's intent was for viewing this mockup at narrower browser widths.

Pan Walker
panwalker@gmail.com
865-406-1274
