import { invertColor, capitalize } from './../helpers.js';

export const LegoDetail = (brick) => {
  
  let block = `<section class="block-wrapper" style="background-color:#${brick.ColorHex}">
  <h3>Name: ${capitalize(brick.LegoName)}</h3>
  <div class="block-years">Manufactured ${brick.YearFrom} - ${brick.YearTo}</div>
  
  `;
  const notes = brick.Notes;   
  if (notes) {
    let addNotes = `<div class="block-notes">Notes: ${notes}</div>
                      </section>
                    `;
    block += addNotes;
  }  else {
    block += `</section>`;
  }       
  const link = brick.ColorstreamLinkImage;
  if (link) {
    //true? wrap the block in an a tag
    return `
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>`;
  } else {
    //false? return the block
    return block;
  }
}