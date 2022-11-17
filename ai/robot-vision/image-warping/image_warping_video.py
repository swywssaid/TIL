import cv2
import numpy as np
import copy

points_src = []

# mouse_event_handler
def mouse_event_handler(event, x, y, flags, param):
    global points_src
    if event == cv2.EVENT_LBUTTONDOWN:
        points_src.append((x,y))

def main():
    global points_src
    
    # Prepare the rectified points
    view_size = (450,720)
    points_dst = np.array([[0,0], [view_size[0],0], [0, view_size[1]], [view_size[0], view_size[1]]])
    
    # Load an video
    capture = cv2.VideoCapture('./road_video.mp4')
    window_name = "Bird-Eye-View"
    
    while capture.isOpened():
        run, frame = capture.read()
        if run:
            # flip video left-right, top-bottom
            frame = cv2.flip(frame,0)
            frame = cv2.flip(frame,1)   
            
            # Load an image  
            cv2.namedWindow(window_name)
            cv2.setMouseCallback(window_name, mouse_event_handler)
            while len(points_src) < 4:
                display = copy.deepcopy(frame)        
                idx = min(len(points_src), len(points_dst))
                if len(points_src) > 0:            
                    display = cv2.circle(display, points_src[idx-1], 5, (0, 255, 0), -1)
                cv2.imshow(window_name, display)
                if cv2.waitKey(1) == ord('q'): break
            
            # findHomography & warpPerspective
            points_src = np.array(points_src, dtype=np.float32)
            H, inliner_mask = cv2.findHomography(points_src, points_dst, cv2.RANSAC)
            rectify = cv2.warpPerspective(frame, H, view_size)
                
            # Show Image
            cv2.imshow("frame img", frame)
            cv2.imshow("bird-eye-view img", rectify)                
                      
            if cv2.waitKey(30) & 0xFF == ord('q'):
             break
        else:
            print('no frame')
            break
        
if __name__ == '__main__' :
    main()