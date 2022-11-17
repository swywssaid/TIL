import cv2
import numpy as np
import copy

points_src = []

def mouse_event_handler(event, x, y, flags, param):
    global points_src
    if event == cv2.EVENT_LBUTTONDOWN:
        points_src.append((x,y))
        # points_src = np.append(points_src, np.array((x,y)))

def main():
    global points_src
    input = "./road_img.jpg" 
    window_name = "Bird-Eye-View"
    
    # card_size = np.array([450, 250])
    view_size = (360,720)

    # Prepare the rectified points
    points_dst = np.array([[0,0], [view_size[0],0], [0, view_size[1]], [view_size[0], view_size[1]]])

    # Load an image
    original = cv2.imread(input)    
    cv2.namedWindow(window_name)
    cv2.setMouseCallback(window_name, mouse_event_handler)
    while len(points_src) < 4:
        display = copy.deepcopy(original)        
        idx = min(len(points_src), len(points_dst))
        if len(points_src) > 0:            
            display = cv2.circle(display, points_src[idx-1], 5, (0, 255, 0), -1)
        cv2.imshow(window_name, display)
        if cv2.waitKey(1) == ord('q'): break
    
    points_src = np.array(points_src, dtype=np.float32)
    H, inliner_mask = cv2.findHomography(points_src, points_dst, cv2.RANSAC)
    rectify = cv2.warpPerspective(original, H, view_size)
        
    # Show Image
    cv2.imshow("original img", original)
    cv2.imshow("bird-eye-view img", rectify)
    cv2.waitKey(0)

if __name__ == '__main__' :
    main()
