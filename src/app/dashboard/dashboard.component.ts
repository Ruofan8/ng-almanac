import { Component, Sanitizer } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RoomService, Room, WorkItem } from '../services/room.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  room: Room;
  workitems: WorkItem[] = new Array<WorkItem>();
  animal: string;
  name: string;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  getRoomData () {
    this.roomService.getRoom(1).subscribe(room => {
      console.log(room)
      this.room = {...room};
      if (room.WorkItems != null) {
        this.getWorkitemsData(room);
      }
    });
  }

  getWorkitemsData (room) {
    room.WorkItems.forEach(number => {
      this.roomService.getWorkitem(number).subscribe( workItem => {
        console.log(workItem);
        workItem.cols = 1;
        workItem.rows = 1;
        this.workitems.push({...workItem});
      });
    });
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private roomService: RoomService,
    private sanitizer: Sanitizer){
    // this.getRoomData();
  }
}
