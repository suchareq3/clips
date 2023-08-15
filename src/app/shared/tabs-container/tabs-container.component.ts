import { Component, ContentChildren, AfterContentInit, QueryList, Query} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit{
  
  //annotating 'tabs' is completely optional, however it adds type safety (& code completion in vscode)
  //for example: using 'this.tabs.' now gives us available options in vscode
  //previously, without annotation, it didn't give us ANY recommendations!

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();
  // ^^^^ ...either this line, or the line below... vvvv
  // @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;
  // this makes the property OPTIONAL. ^^^^^
  
  constructor () {}

  ngAfterContentInit(): void {
    //console.log(this.tabs);
    const activeTabs = this.tabs!.filter(
      tab => tab.active == true
    )

    //"if no tab is active..."
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
      //                    ^^^^ 
      // this is TypeScript's 'non-null assertion operator'.
      // it basically tells TS "oh my god, chill, this is not gonna be empty, stop being dramatic.......god"
    } 
  }

  //NOTE: this function is re-usable! it can work for mouse click events as well! cool!
  selectTab(tab: TabComponent) {
    //part 1: disable all active tabs (to make sure only 1 will be active)
    this.tabs!.forEach(tab => {
      tab.active = false;
    })
    //part 2: make the passed in tab active
    tab.active = true;

    // this is an alternative way of preventing default behavior 
    return false
  }


  // returns an object that's used in [ngClass]
  getTabClasses(tab: TabComponent) {
    const inactiveTabClasses = 'hover:text-indigo-400';
    const activeTabClasses = 'hover:text-white text-white bg-indigo-400';

    return {
      // using 'Computed Property Names' here!
      // basically, these [] brackets let me use the values of the variables I've declared above.
      // without these brackets, it would just set those names literally as "inactiveTabClasses" and "activeTabClasses"
      [inactiveTabClasses]: !tab.active,
      [activeTabClasses]: tab.active
    }
  }

}
